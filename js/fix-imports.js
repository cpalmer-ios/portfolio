/**
 * This script fixes import issues by providing proper module resolutions
 * It executes immediately as an IIFE (Immediately Invoked Function Expression)
 */
(function() {
  console.log('Import fix script running');
  
  // Check if SplitType exists, if not look for it in vendor scripts
  if (typeof window.SplitType === 'undefined') {
    console.log('SplitType not found, looking for it in vendor scripts');
    // Will be created by our polyfill if not found
  }
  
  // Fix GSAP module import issue
  const fixGSAPImports = function() {
    // Create a global module mapping to resolve ES module imports
    window.__modules = window.__modules || {};
    
    // Module name to global variable mapping
    const moduleMap = {
      'gsap': window.gsap || window.TweenMax,
      'gsap/dist/gsap': window.gsap || window.TweenMax,
      'gsap/Draggable': window.Draggable,
      'gsap/ScrollTrigger': window.ScrollTrigger,
      'split-type': window.SplitType
    };
    
    // Create the GSAP module if needed using TweenMax/TweenLite as fallback
    if (!window.gsap && (window.TweenMax || window.TweenLite)) {
      console.log('Creating GSAP compatibility layer from TweenMax/TweenLite');
      
      // Use TweenMax or TweenLite as a base
      const tweenBase = window.TweenMax || window.TweenLite;
      
      // Basic GSAP API from TweenMax/TweenLite
      window.gsap = {
        to: tweenBase.to,
        from: tweenBase.from,
        fromTo: tweenBase.fromTo,
        set: tweenBase.set,
        timeline: function(vars) {
          return window.TimelineLite ? new window.TimelineLite(vars) : null;
        },
        utils: {
          selector: function(selector) {
            return document.querySelectorAll(selector);
          },
          toArray: function(targets) {
            if (typeof targets === 'string') {
              return Array.from(document.querySelectorAll(targets));
            }
            return Array.from(targets || []);
          }
        }
      };
      
      // Add Timeline and TimelineLite compatibility
      if (window.TimelineLite) {
        window.gsap.timeline = function(vars) {
          return new window.TimelineLite(vars);
        };
      } else if (window.TimelineMax) {
        window.gsap.timeline = function(vars) {
          return new window.TimelineMax(vars);
        };
      }
      
      // Add additional GSAP plugins if available
      if (window.CSSPlugin) {
        window.gsap.registerPlugin = function(plugin) {
          console.log('Plugin registration simulated:', plugin);
        };
      }
      
      // Update the module map with our new gsap object
      moduleMap['gsap'] = window.gsap;
      moduleMap['gsap/dist/gsap'] = window.gsap;
    }
    
    // Override import for module support
    if (window.HTMLScriptElement.supports && window.HTMLScriptElement.supports('importmap')) {
      console.log('Browser supports importmap natively');
    } else {
      console.log('Creating importmap polyfill');
      
      // Handle dynamic imports
      const originalImport = window.import;
      window.import = function(specifier) {
        const module = moduleMap[specifier];
        if (module) {
          return Promise.resolve({
            default: module,
            ...module
          });
        }
        
        return originalImport ? originalImport.apply(window, arguments) 
          : Promise.reject(new Error(`Module ${specifier} not found`));
      };
      
      // Add an import map for proper module resolution
      const importMap = {
        imports: {}
      };
      
      Object.keys(moduleMap).forEach(moduleName => {
        if (moduleMap[moduleName]) {
          importMap.imports[moduleName] = `data:text/javascript,export default globalThis.${moduleMap[moduleName].name || 'gsap'};`;
        }
      });
      
      // Add the import map to document head
      const importMapScript = document.createElement('script');
      importMapScript.type = 'importmap';
      importMapScript.textContent = JSON.stringify(importMap);
      document.head.appendChild(importMapScript);
      
      // Also patch the dynamic import error at script loading time
      const originalCreateElement = document.createElement;
      document.createElement = function(tagName) {
        const element = originalCreateElement.apply(document, arguments);
        if (tagName.toLowerCase() === 'script') {
          const originalSetAttribute = element.setAttribute;
          element.setAttribute = function(name, value) {
            if (name === 'type' && value === 'module') {
              // Replace bare imports with full paths in the script content
              const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
              Object.defineProperty(element, 'innerHTML', {
                set: function(content) {
                  // Replace bare imports with our known modules
                  Object.keys(moduleMap).forEach(moduleName => {
                    const regex = new RegExp(`import\\s+(.+)\\s+from\\s+['"]${moduleName}['"]`, 'g');
                    content = content.replace(regex, (match, importNames) => {
                      return `// Patched import\nconst ${importNames} = window.${moduleName};`;
                    });
                    
                    // Also fix dynamic imports
                    const dynamicRegex = new RegExp(`import\\s*\\(['"]${moduleName}['"]\\)`, 'g');
                    content = content.replace(dynamicRegex, `Promise.resolve(window.${moduleName})`);
                  });
                  
                  originalInnerHTML.set.call(this, content);
                },
                get: function() {
                  return originalInnerHTML.get.call(this);
                }
              });
            }
            return originalSetAttribute.call(this, name, value);
          };
        }
        return element;
      };
    }
  };
  
  // Run the GSAP fix
  fixGSAPImports();
  
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
