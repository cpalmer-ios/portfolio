/**
 * This script fixes import issues by providing proper module resolutions
 * It executes immediately as an IIFE (Immediately Invoked Function Expression)
 */
(function() {
  console.log('Import fix script running');
  
  // Create proper module resolution for ES6 imports
  const defineModule = function(name, factory) {
    // For ES6 imports in standard browsers
    if (typeof window !== 'undefined') {
      window[name] = factory();
    }
    
    // For CommonJS environments
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
      module.exports = factory();
    }
    
    // For AMD/RequireJS
    if (typeof define === 'function' && define.amd) {
      define(name, [], factory);
    }
    
    // For dynamic imports
    if (typeof window !== 'undefined') {
      const originalImport = window.import;
      window.import = function(modulePath) {
        if (modulePath === name || modulePath.endsWith('/' + name) || modulePath.endsWith('/' + name + '.js')) {
          return Promise.resolve({ 
            [name]: factory(),
            default: factory()
          });
        }
        return originalImport ? originalImport.apply(window, arguments) : Promise.reject(new Error('Native import not supported'));
      };
    }
    
    // Support for various module map configurations
    if (typeof window.System !== 'undefined' && window.System.register) {
      window.System.register(name, [], function(exports) {
        return {
          setters: [],
          execute: function() {
            const module = factory();
            exports(name, module);
            exports('default', module);
          }
        };
      });
    }
    
    // ES6 module shim
    try {
      if (!window[name + '_importShim']) {
        const script = document.createElement('script');
        script.type = 'module';
        script.textContent = `
          import * as polyfill from './${name}.js';
          window.${name}Module = polyfill;
        `;
        document.head.appendChild(script);
        window[name + '_importShim'] = true;
      }
    } catch (e) {
      console.warn('Failed to create ES6 module shim:', e);
    }
  };

  // Fix GSAP module import issue
  if (window.TweenMax && !window.gsap) {
    console.log('Creating gsap compatibility layer from TweenMax');
    
    // Create a comprehensive GSAP compatibility layer
    const createGSAP = function() {
      // Basic GSAP API from TweenMax
      const gsap = {
        to: window.TweenMax.to,
        from: window.TweenMax.from,
        fromTo: window.TweenMax.fromTo,
        set: window.TweenMax.set,
        timeline: function(vars) {
          return window.TweenMax.timeline(vars);
        },
        getProperty: function(target, property, unit) {
          let value;
          try {
            if (typeof property === 'string') {
              // Simple property handling
              if (property === 'x' || property === 'y' || property === 'z') {
                value = target._gsTransform ? target._gsTransform[property] || 0 : 0;
              } else {
                const style = window.getComputedStyle(target);
                value = style[property];
                if (unit === false && value.endsWith('px')) {
                  value = parseFloat(value);
                }
              }
            }
          } catch (e) {
            console.warn('Error in gsap.getProperty:', e);
          }
          return value;
        },
        registerPlugin: function() {
          console.log('GSAP registerPlugin called (compatibility mode)');
          // Just return GSAP to allow chaining
          return gsap;
        },
        core: {
          _warn: function(message) {
            console.warn("[GSAP Compat]:", message);
          },
          Tween: window.TweenMax,
          Animation: window.TweenMax
        },
        utils: {
          toArray: function(targets) {
            if (typeof targets === 'string') {
              return Array.from(document.querySelectorAll(targets));
            }
            if (targets instanceof Element) {
              return [targets];
            }
            if (targets instanceof NodeList || targets instanceof HTMLCollection) {
              return Array.from(targets);
            }
            return Array.isArray(targets) ? targets : [targets];
          },
          selector: function(selector) {
            return document.querySelector(selector);
          },
          wrap: function(elements, wrapper) {
            elements = gsap.utils.toArray(elements);
            const wrapperElement = typeof wrapper === 'string' 
              ? document.createElement(wrapper) 
              : wrapper;
              
            elements.forEach(el => {
              const parent = el.parentNode;
              parent.insertBefore(wrapperElement, el);
              wrapperElement.appendChild(el);
            });
            
            return wrapperElement;
          }
        }
      };
      
      // Add cross-references to maintain compatibility
      gsap.core.Tween.prototype.totalDuration = gsap.core.Tween.prototype.totalDuration || 
        function() { return this.totalDuration ? this.totalDuration() : this.duration(); };
        
      // Return the created gsap object
      return gsap;
    };
    
    // Create global gsap object
    window.gsap = createGSAP();
    
    // Create module exports
    defineModule('gsap', function() {
      return window.gsap;
    });
  }
  
  // Handle Snap.svg eve issue - this is a fallback in case snap-svg-fix.js fails
  if (window.Snap && !window.Snap.eve && window.eve) {
    console.log('Fixing Snap.svg eve dependency');
    try {
      window.Snap.eve = window.eve;
      console.log('Successfully reconnected eve to Snap');
    } catch (e) {
      console.error('Failed to reconnect eve to Snap:', e);
    }
  }
  
  // Fix missing SplitType by checking if split-type-polyfill.js has already created it
  if (!window.SplitType) {
    console.log('SplitType not found, looking for it in vendor scripts');
    
    // Look for split-type.min.js and load it if found
    const scriptElements = document.querySelectorAll('script');
    let splitTypeUrl = null;
    
    for (const script of scriptElements) {
      if (script.src && script.src.includes('split-type')) {
        splitTypeUrl = script.src;
        break;
      }
    }
    
    if (splitTypeUrl) {
      console.log('Found SplitType script at:', splitTypeUrl);
      // We know the URL but it may not have loaded yet, so we won't do anything here
      // The split-type-polyfill.js will handle creating SplitType if it's not defined
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
})();
