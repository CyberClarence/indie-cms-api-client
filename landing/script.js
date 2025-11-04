/**
 * IndieCMS Landing Page - Interactive Features
 */

// ================================
// CODE TAB SWITCHING
// ================================

document.addEventListener('DOMContentLoaded', () => {
  const codeTabs = document.querySelectorAll('.code-tab');
  const codeBlocks = document.querySelectorAll('.code-block');

  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;

      // Remove active class from all tabs and blocks
      codeTabs.forEach(t => t.classList.remove('code-tab-active'));
      codeBlocks.forEach(block => block.classList.remove('code-block-active'));

      // Add active class to clicked tab
      tab.classList.add('code-tab-active');

      // Show corresponding code block
      const targetBlock = document.querySelector(`[data-content="${targetTab}"]`);
      if (targetBlock) {
        targetBlock.classList.add('code-block-active');
      }
    });
  });
});

// ================================
// COPY TO CLIPBOARD
// ================================

document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const textToCopy = button.dataset.copy;

      try {
        await navigator.clipboard.writeText(textToCopy);

        // Visual feedback
        const originalHTML = button.innerHTML;
        button.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Copied!
        `;

        button.style.background = 'rgba(16, 185, 129, 0.2)';
        button.style.color = '#10b981';

        // Reset after 2 seconds
        setTimeout(() => {
          button.innerHTML = originalHTML;
          button.style.background = '';
          button.style.color = '';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text:', err);

        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        try {
          document.execCommand('copy');
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        } catch (fallbackErr) {
          console.error('Fallback copy failed:', fallbackErr);
        }

        document.body.removeChild(textarea);
      }
    });
  });
});

// ================================
// SCROLL ANIMATIONS
// ================================

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll('[data-animate]');
  animatedElements.forEach(el => observer.observe(el));
});

// ================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ================================

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // Skip if it's just "#"
      if (targetId === '#') {
        e.preventDefault();
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        const navHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// ================================
// NAVBAR SCROLL EFFECT
// ================================

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 0) {
      nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });
});

// ================================
// MOBILE NAVIGATION TOGGLE
// ================================

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';

      if (isOpen) {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '72px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'white';
        navLinks.style.padding = '1rem';
        navLinks.style.borderBottom = '1px solid #e5e7eb';
        navLinks.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
      }

      // Animate toggle button
      const spans = navToggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0)';
      } else {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
      }
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';

          const spans = navToggle.querySelectorAll('span');
          spans[0].style.transform = 'rotate(0)';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'rotate(0)';
        }
      });
    });

    // Close mobile menu when resizing to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinks.style.display = '';
        navLinks.style.flexDirection = '';
        navLinks.style.position = '';
        navLinks.style.top = '';
        navLinks.style.left = '';
        navLinks.style.right = '';
        navLinks.style.background = '';
        navLinks.style.padding = '';
        navLinks.style.borderBottom = '';
        navLinks.style.boxShadow = '';
      }
    });
  }
});

// ================================
// PERFORMANCE OPTIMIZATION
// ================================

// Lazy load images if any are added
document.addEventListener('DOMContentLoaded', () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
});

// ================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ================================

document.addEventListener('DOMContentLoaded', () => {
  // Add keyboard support for custom interactive elements
  const interactiveElements = document.querySelectorAll('[role="button"]:not(button)');

  interactiveElements.forEach(element => {
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        element.click();
      }
    });
  });
});

// ================================
// ANALYTICS & TRACKING (Optional)
// ================================

// Track button clicks for analytics
document.addEventListener('DOMContentLoaded', () => {
  const trackableButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

  trackableButtons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent.trim();
      const buttonHref = button.getAttribute('href');

      // Log to console (replace with actual analytics service)
      console.log('Button clicked:', {
        text: buttonText,
        href: buttonHref,
        timestamp: new Date().toISOString()
      });

      // Example: Send to analytics service
      // if (window.gtag) {
      //   gtag('event', 'button_click', {
      //     'event_category': 'engagement',
      //     'event_label': buttonText
      //   });
      // }
    });
  });
});

// ================================
// ERROR HANDLING
// ================================

window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
  // Optionally send errors to monitoring service
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
  // Optionally send errors to monitoring service
});

// ================================
// CONSOLE EASTER EGG
// ================================

console.log(
  '%c🚀 IndieCMS API Client',
  'font-size: 20px; font-weight: bold; background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); color: white; padding: 10px 20px; border-radius: 8px;'
);

console.log(
  '%cBuilt with modern web technologies',
  'font-size: 12px; color: #6b7280; margin-top: 5px;'
);

console.log(
  '%cCheck out the code: https://github.com/CyberClarence/indie-cms-api-client',
  'font-size: 12px; color: #7c3aed; margin-top: 5px;'
);
