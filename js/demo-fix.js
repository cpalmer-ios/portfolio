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
