/**
 * This script fixes import issues by providing proper module resolutions
 * It executes immediately as an IIFE (Immediately Invoked Function Expression)
 */
(function() {
  // Wait for window to load
  window.addEventListener('load', function() {
    // Fix GSAP import issue
    if (!window.gsap && window.TweenMax) {
      console.log('Creating gsap compatibility layer from TweenMax');
      
      // Create a gsap global object that mirrors the TweenMax API
      window.gsap = {
        to: window.TweenMax.to,
        from: window.TweenMax.from,
        fromTo: window.TweenMax.fromTo,
        set: window.TweenMax.set,
        timeline: function(vars) {
          return window.TweenMax.timeline(vars);
        },
        core: {
          _warn: function(message) {
            console.warn("[GSAP Compat]:", message);
          }
        }
      };
      
      // Create a compatibility layer for modern GSAP module imports
      if (typeof window.define === 'function' && window.define.amd) {
        // For AMD/RequireJS modules
        window.define('gsap', [], function() {
          return window.gsap;
        });
      }
      
      // For ES6 modules
      if (typeof window.System !== 'undefined' && window.System.register) {
        window.System.register('gsap', [], function(exports) {
          return {
            setters: [],
            execute: function() {
              exports('gsap', window.gsap);
            }
          };
        });
      }
    }
    
    // Fix SnapSVG loading issue
    if (window.Snap && !window.Snap.eve) {
      console.log('Fixing Snap.svg eve dependency');
      
      // Create a minimal eve compatibility layer if missing
      window.eve = window.eve || function(event) {
        return function() { 
          console.log('[eve compat]', event, arguments);
          return true;
        };
      };
      
      // Attempt to reconnect eve to Snap
      if (window.Snap && typeof window.Snap === 'function') {
        try {
          window.Snap.eve = window.eve;
          console.log('Successfully reconnected eve to Snap');
        } catch (e) {
          console.error('Failed to reconnect eve to Snap:', e);
        }
      }
    }
    
    // Add support for type="module" scripts in older browsers
    const moduleScripts = document.querySelectorAll('script[type="module"]');
    moduleScripts.forEach(script => {
      if (script.src && !script.hasAttribute('data-processed')) {
        // Create a new regular script element
        const regularScript = document.createElement('script');
        regularScript.src = script.src;
        regularScript.setAttribute('data-fallback', 'true');
        
        // Add an error handler to the original module script
        script.addEventListener('error', function(e) {
          console.log('Module script failed to load, using fallback:', script.src);
          document.head.appendChild(regularScript);
        });
        
        // Mark as processed
        script.setAttribute('data-processed', 'true');
      }
    });
  });
})();
