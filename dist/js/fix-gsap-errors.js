/**
 * This script fixes GSAP null target errors by intercepting them before they happen
 * It executes immediately as an IIFE (Immediately Invoked Function Expression)
 */
(function() {
  // Create a MutationObserver to watch for GSAP loading
  const observer = new MutationObserver(function(mutations) {
    for (let mutation of mutations) {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        for (let node of mutation.addedNodes) {
          if (node.tagName === 'SCRIPT' && (node.src.includes('gsap') || node.textContent.includes('gsap'))) {
            // GSAP script detected, apply our fix before it initializes
            applyGsapFix();
          }
        }
      }
    }
  });

  // Start observing the document
  observer.observe(document.documentElement, { 
    childList: true, 
    subtree: true 
  });
  
  // Function to apply the GSAP fix
  function applyGsapFix() {
    // Wait for a tiny bit to ensure GSAP has loaded
    setTimeout(function() {
      if (window.gsap) {
        // Store original methods
        const originalWarn = window.gsap.core._warn;
        const originalTo = window.gsap.to;
        const originalFrom = window.gsap.from;
        const originalFromTo = window.gsap.fromTo;
        
        // Override _warn to suppress null target errors
        window.gsap.core._warn = function(message) {
          if (!message.includes('target null not found')) {
            originalWarn.apply(this, arguments);
          }
        };
        
        // Override animation methods with null-checking versions
        window.gsap.to = function(targets, config, position) {
          if (!targets || 
              (typeof targets === 'string' && !document.querySelector(targets)) ||
              (targets.length === 0) || 
              targets === null) {
            console.log('GSAP target not found, animation skipped');
            return { 
              to: window.gsap.to,
              from: window.gsap.from,
              fromTo: window.gsap.fromTo,
              add: function() { return this; },
              addLabel: function() { return this; }
            };
          }
          return originalTo.call(window.gsap, targets, config, position);
        };
        
        window.gsap.from = function(targets, config, position) {
          if (!targets || 
              (typeof targets === 'string' && !document.querySelector(targets)) ||
              (targets.length === 0) || 
              targets === null) {
            console.log('GSAP target not found, animation skipped');
            return {
              to: window.gsap.to,
              from: window.gsap.from,
              fromTo: window.gsap.fromTo,
              add: function() { return this; },
              addLabel: function() { return this; }
            };
          }
          return originalFrom.call(window.gsap, targets, config, position);
        };
        
        window.gsap.fromTo = function(targets, fromConfig, toConfig, position) {
          if (!targets || 
              (typeof targets === 'string' && !document.querySelector(targets)) ||
              (targets.length === 0) || 
              targets === null) {
            console.log('GSAP target not found, animation skipped');
            return {
              to: window.gsap.to,
              from: window.gsap.from,
              fromTo: window.gsap.fromTo,
              add: function() { return this; },
              addLabel: function() { return this; }
            };
          }
          return originalFromTo.call(window.gsap, targets, fromConfig, toConfig, position);
        };
        
        console.log('GSAP error prevention initialized');
      }
    }, 10);
  }
  
  // Also try to apply the fix immediately in case GSAP is already loaded
  if (window.gsap) {
    applyGsapFix();
  }
  
  // Also try on DOMContentLoaded event
  document.addEventListener('DOMContentLoaded', function() {
    if (window.gsap) {
      applyGsapFix();
    }
  });
})();
