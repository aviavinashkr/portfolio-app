// JavaScript for enhanced interactivity
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a link
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-link');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (mobileMenu) {
        mobileMenu.classList.remove('open');
      }
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('active');
      }
    });
  });

  // Update current year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;

      e.preventDefault();

      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerHeight = document.querySelector('.top-nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.top-nav');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
  });

  // Scroll animations
  const animateElements = document.querySelectorAll('[data-animate]');

  function checkIfInView() {
    const windowHeight = window.innerHeight;

    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('animated');
      }
    });
  }

  // Run on load and scroll
  window.addEventListener('load', checkIfInView);
  window.addEventListener('scroll', checkIfInView);

  // Active nav link based on scroll position
  const navLinks = document.querySelectorAll('.nav-link, .footer-link');
  const sections = document.querySelectorAll('section[id]');

  function setActiveLink() {
    let scrollPosition = window.scrollY + 100; // Offset for header

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Run on load and scroll
  window.addEventListener('load', setActiveLink);
  window.addEventListener('scroll', setActiveLink);

  // Parallax effect for hero section
  const hero = document.querySelector('.hero-section');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.1;
      hero.style.backgroundPosition = `center ${rate}px`;
    });
  }
});