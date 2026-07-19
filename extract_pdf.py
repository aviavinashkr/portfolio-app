import PyPDF2
import sys
import re

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF file"""
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            num_pages = len(pdf_reader.pages)
            
            for page_num in range(num_pages):
                page = pdf_reader.pages[page_num]
                text += page.extract_text()
                text += "\n\n"  # Add spacing between pages
    except Exception as e:
        print(f"Error extracting text from PDF: {e}")
        return None
    
    return text

def clean_text(text):
    """Clean extracted text for better markdown formatting"""
    if not text:
        return ""
    
    # Fix common PDF extraction issues
    # Replace multiple newlines with double newline for paragraph breaks
    text = re.sub(r'\n{3,}', '\n\n', text)
    
    # Fix hyphenated words that were split across lines
    text = re.sub(r'(\w+)-\n(\w+)', r'\1\2', text)
    
    # Remove extra spaces
    text = re.sub(r'[ \t]+', ' ', text)
    
    # Fix spacing around punctuation
    text = re.sub(r'\s+([,.!?:;])', r'\1', text)
    text = re.sub(r'(https?://\S+)', r'\1', text)  # Keep URLs intact
    
    return text.strip()

def format_as_markdown(text):
    """Format extracted text as markdown with basic structure"""
    lines = text.split('\n')
    formatted_lines = []
    
    for line in lines:
        line = line.strip()
        if not line:
            formatted_lines.append('')
            continue
            
        # Detect potential headers (short lines, all caps, or ending with colon)
        if len(line) < 100 and (line.isupper() or line.endswith(':')) and not line.startswith('http'):
            # This might be a section header
            formatted_lines.append(f"## {line}")
        elif re.match(r'^\d+\.\s+.+', line):  # Numbered lists
            formatted_lines.append(line)
        elif re.match(r'^[•\-\*]\s+.+', line):  # Bullet points
            formatted_lines.append(line)
        else:
            formatted_lines.append(line)
    
    return '\n'.join(formatted_lines)

def main():
    pdf_path = "Info/Avinash kumar - devops - 5 years.pdf"
    output_path = "RESUME.md"
    
    print(f"Extracting text from {pdf_path}...")
    text = extract_text_from_pdf(pdf_path)
    
    if text is None:
        print("Failed to extract text from PDF")
        return 1
    
    print("Cleaning extracted text...")
    cleaned_text = clean_text(text)
    
    print("Formatting as markdown...")
    markdown_text = format_as_markdown(cleaned_text)
    
    # Add a title
    final_markdown = f"# Avinash Kumar - DevOps Professional\n\n{markdown_text}"
    
    print(f"Writing to {output_path}...")
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(final_markdown)
        print("Successfully extracted and saved resume as RESUME.md")
        return 0
    except Exception as e:
        print(f"Error writing file: {e}")
        return 1

if __name__ == "__main__":
    sys.exit(main())
