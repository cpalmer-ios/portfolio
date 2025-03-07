/**
 * This script specifically fixes the GSAP animations in demo.js
 * It ensures the DOM elements exist before animations are attempted
 */
(function() {
  // Function to patch the DOM object in demo.js
  function patchDemoDOM() {
    // Wait for the demo script to execute
    setTimeout(function() {
      if (window.g2DDQ && window.g2DDQ.gsap) {
        console.log('Patching demo.js DOM references');
        
        // Get the timeline variable reference from demo.js
        const timeline = window.menuTimeline || {};
        
        // Check if we already patched
        if (timeline._patched) return;
        
        // Check if any menu elements exist and create placeholders if needed
        const ensureElementExists = function(selector, parent) {
          // If parent is specified, check inside that
          const container = parent || document;
          let element = container.querySelector(selector);
          
          // If element doesn't exist, create a dummy element that won't affect page
          if (!element) {
            console.log('Creating placeholder for missing element:', selector);
            element = document.createElement('div');
            element.style.display = 'none';
            element.className = selector.replace('.', '');
            document.body.appendChild(element);
          }
          
          return element;
        };
        
        // Ensure all the DOM elements referenced in demo.js exist
        if (typeof DOM !== 'undefined') {
          if (DOM.cover) {
            DOM.cover.wrap = ensureElementExists('.cover-wrap');
            DOM.cover.outer = ensureElementExists('.cover');
            DOM.cover.inner = ensureElementExists('.cover__inner');
          }
          
          if (DOM.content) {
            if (!DOM.content.imgs || DOM.content.imgs.length === 0) {
              DOM.content.imgs = [ensureElementExists('.wrapper-jfish')];
            }
            
            if (!DOM.content.titles || DOM.content.titles.length === 0) {
              DOM.content.titles = [ensureElementExists('.content__text')];
            }
          }
          
          DOM.menu = DOM.menu || ensureElementExists('.menu');
          DOM.menuContent = DOM.menuContent || ensureElementExists('.menu__content');
          DOM.closeCtrl = DOM.closeCtrl || ensureElementExists('.menu__back');
        }
        
        // Mark as patched
        if (timeline) {
          timeline._patched = true;
        }
      }
    }, 500); // Give demo.js time to load
  }
  
  // Check if the document is already loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    patchDemoDOM();
  } else {
    // Otherwise wait for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', patchDemoDOM);
  }
  
  // Try again after window load to be sure
  window.addEventListener('load', patchDemoDOM);
})();

/**
 * Fix for card click functionality and hover effects
 */
(function() {
  console.log('Demo fix script running...');

  function fixCards() {
    // Make sure all card elements have click handlers properly set
    console.log('Fixing card click functionality...');
    
    // Check if card images have click handlers
    var cardImages = document.querySelectorAll('.card__image');
    var cardCloseButtons = document.querySelectorAll('.card__btn-close');
    
    if (cardImages.length > 0) {
      console.log('Found', cardImages.length, 'card images to fix');
      
      // Add click handlers directly in case jQuery handlers aren't working
      cardImages.forEach(function(image, index) {
        // Remove existing handlers to prevent duplicates
        image.removeAttribute('onclick');
        
        // Add new handler
        image.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          console.log('Card image clicked:', index);
          
          // Try to get the card container
          var container = image.closest('.card__container');
          if (container) {
            container.classList.remove('card__container--closed');
            document.body.classList.add('body--hidden');
          }
          
          // If demo object is available, try to trigger its sequence
          if (window.demo && typeof window.demo._playSequence === 'function') {
            try {
              window.demo._playSequence(true, index, e);
            } catch (err) {
              console.error('Error calling demo._playSequence:', err);
            }
          }
        });
      });
      
      // Fix close buttons
      cardCloseButtons.forEach(function(button, index) {
        // Remove existing handlers to prevent duplicates
        button.removeAttribute('onclick');
        
        // Add new handler
        button.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          console.log('Card close button clicked:', index);
          
          // Try to get the card container
          var container = button.closest('.card__container');
          if (container) {
            container.classList.add('card__container--closed');
            document.body.classList.remove('body--hidden');
          }
          
          // If demo object is available, try to trigger its sequence
          if (window.demo && typeof window.demo._playSequence === 'function') {
            try {
              window.demo._playSequence(false, index, e);
            } catch (err) {
              console.error('Error calling demo._playSequence:', err);
            }
          }
        });
      });
    }
  }

  function fixHoverEffects() {
    console.log('Fixing text hover effects...');
    
    // Ensure TextAnimator and TextSplitter are available
    if (typeof window.SplitType === 'undefined') {
      console.error('SplitType is not defined, hover effects may not work');
      return;
    }
    
    try {
      // Force recreate animators for all hover effects
      document.querySelectorAll('.list__item').forEach(item => {
        const cols = Array.from(item.querySelectorAll('.hover-effect'));
        
        if (typeof TextAnimator !== 'undefined') {
          const animators = cols.map(col => new TextAnimator(col));
          
          item.addEventListener('mouseenter', () => {
            animators.forEach(animator => {
              if (animator && typeof animator.animate === 'function') {
                animator.animate();
              }
            });
          });
          
          item.addEventListener('mouseleave', () => {
            animators.forEach(animator => {
              if (animator && typeof animator.animateBack === 'function') {
                animator.animateBack();
              }
            });
          });
        }
      });
      
      // Same for all links with hover-effect class
      document.querySelectorAll('a.hover-effect').forEach(item => {
        if (typeof TextAnimator !== 'undefined') {
          const animator = new TextAnimator(item);
          
          item.addEventListener('mouseenter', () => {
            if (animator && typeof animator.animate === 'function') {
              animator.animate();
            }
          });
          
          item.addEventListener('mouseleave', () => {
            if (animator && typeof animator.animateBack === 'function') {
              animator.animateBack();
            }
          });
        }
      });
    } catch (err) {
      console.error('Error fixing hover effects:', err);
    }
  }

  // Run fixes when DOM is fully loaded and after a short delay to ensure all scripts are loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        fixCards();
        fixHoverEffects();
      }, 500);
    });
  } else {
    // DOM already loaded
    setTimeout(function() {
      fixCards();
      fixHoverEffects();
    }, 500);
  }
})();
