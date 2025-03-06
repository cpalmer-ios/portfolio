/**
 * This script fixes GSAP null target errors by checking if elements exist before animating them
 */
document.addEventListener('DOMContentLoaded', function() {
  // Fix GSAP null target warnings in console
  
  // Original GSAP error handler - we'll modify this to be less noisy
  if (window.gsap) {
    const originalWarn = window.gsap.core._warn;
    window.gsap.core._warn = function(message) {
      // Only log warnings that aren't about null targets
      if (!message.includes('target null not found')) {
        originalWarn.apply(this, arguments);
      }
    };
  }
  
  // Safety wrapper for GSAP animations
  const safeGSAP = {
    to: function(targets, config, position) {
      // Make sure targets exist before passing to GSAP
      if (!targets || 
          (typeof targets === 'string' && !document.querySelector(targets)) ||
          (targets.length === 0) || 
          targets === null) {
        console.log('GSAP target not found, animation skipped');
        return window.gsap; // Return gsap to allow chaining
      }
      
      // If targets exist, proceed with animation
      return window.gsap.to(targets, config, position);
    },
    
    from: function(targets, config, position) {
      // Make sure targets exist before passing to GSAP
      if (!targets || 
          (typeof targets === 'string' && !document.querySelector(targets)) ||
          (targets.length === 0) || 
          targets === null) {
        console.log('GSAP target not found, animation skipped');
        return window.gsap; // Return gsap to allow chaining
      }
      
      // If targets exist, proceed with animation
      return window.gsap.from(targets, config, position);
    },
    
    fromTo: function(targets, fromConfig, toConfig, position) {
      // Make sure targets exist before passing to GSAP
      if (!targets || 
          (typeof targets === 'string' && !document.querySelector(targets)) ||
          (targets.length === 0) || 
          targets === null) {
        console.log('GSAP target not found, animation skipped');
        return window.gsap; // Return gsap to allow chaining
      }
      
      // If targets exist, proceed with animation
      return window.gsap.fromTo(targets, fromConfig, toConfig, position);
    }
  };
  
  // Monkey patch GSAP's methods if needed
  if (window.gsap) {
    // Save original methods
    const originalTo = window.gsap.to;
    const originalFrom = window.gsap.from;
    const originalFromTo = window.gsap.fromTo;
    
    // Replace with safe versions
    window.gsap.to = function(targets, config, position) {
      return safeGSAP.to(targets, config, position);
    };
    
    window.gsap.from = function(targets, config, position) {
      return safeGSAP.from(targets, config, position);
    };
    
    window.gsap.fromTo = function(targets, fromConfig, toConfig, position) {
      return safeGSAP.fromTo(targets, fromConfig, toConfig, position);
    };
  }
  
  console.log('GSAP error prevention initialized');
});
