/**
 * Split-Type Polyfill for compatibility with the TextSplitter class
 * This creates a minimal implementation if the actual library is not loaded
 */
(function() {
  // Wait for document to be interactive before checking
  function initPolyfill() {
    // Check if SplitType is already defined
    if (typeof window.SplitType === 'undefined') {
      console.log('SplitType not found, creating polyfill');
      
      // Create a minimal SplitType implementation
      window.SplitType = function(elements, options) {
        // Handle single element or selector string
        if (typeof elements === 'string') {
          elements = document.querySelectorAll(elements);
        } else if (elements instanceof HTMLElement) {
          elements = [elements];
        } else if (!Array.isArray(elements) && !(elements instanceof NodeList)) {
          console.error('SplitType: Invalid element(s)');
          return {};
        }
        
        // Process each element
        const result = {
          elements: Array.from(elements),
          lines: [],
          words: [],
          chars: []
        };
        
        // Function to process an element
        const processElement = (el) => {
          // Store original text content
          const originalText = el.textContent;
          const types = (options && options.types) ? options.types.split(',').map(t => t.trim()) : ['lines', 'words', 'chars'];
          
          // Only proceed if the element has content
          if (!originalText.trim()) return;
          
          // Clear the element
          const originalHTML = el.innerHTML;
          el.innerHTML = '';
          
          // Create containers based on specified types
          if (types.includes('lines')) {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'SplitType-line';
            lineDiv.style.display = 'block';
            lineDiv.innerHTML = originalHTML;
            el.appendChild(lineDiv);
            result.lines.push(lineDiv);
          }
          
          if (types.includes('words')) {
            const words = originalText.split(/\\s+/);
            words.forEach(word => {
              if (!word.trim()) return;
              const wordSpan = document.createElement('span');
              wordSpan.className = 'SplitType-word';
              wordSpan.textContent = word + ' ';
              
              // If we're not adding chars, add it directly to the element
              if (!types.includes('chars')) {
                if (types.includes('lines')) {
                  result.lines[0].appendChild(wordSpan);
                } else {
                  el.appendChild(wordSpan);
                }
              }
              
              result.words.push(wordSpan);
              
              // If we're splitting into characters
              if (types.includes('chars')) {
                Array.from(word).forEach(char => {
                  const charSpan = document.createElement('span');
                  charSpan.className = 'SplitType-char';
                  charSpan.textContent = char;
                  
                  // Add to the appropriate parent
                  if (types.includes('words')) {
                    wordSpan.appendChild(charSpan);
                  } else if (types.includes('lines')) {
                    result.lines[0].appendChild(charSpan);
                  } else {
                    el.appendChild(charSpan);
                  }
                  
                  result.chars.push(charSpan);
                });
              }
            });
            
            // If we have words but not chars, add the words to the appropriate parent
            if (!types.includes('chars') && types.includes('words')) {
              if (types.includes('lines')) {
                result.words.forEach(word => {
                  if (!word.parentNode) {
                    result.lines[0].appendChild(word);
                  }
                });
              } else {
                result.words.forEach(word => {
                  if (!word.parentNode) {
                    el.appendChild(word);
                  }
                });
              }
            }
          } else if (!types.includes('words') && types.includes('chars')) {
            // If we have chars but not words
            Array.from(originalText).forEach(char => {
              if (!char.trim() && char !== ' ') return;
              
              const charSpan = document.createElement('span');
              charSpan.className = 'SplitType-char';
              charSpan.textContent = char;
              
              if (types.includes('lines')) {
                result.lines[0].appendChild(charSpan);
              } else {
                el.appendChild(charSpan);
              }
              
              result.chars.push(charSpan);
            });
          }
          
          // If we didn't add any splitting, restore the original content
          if (el.childNodes.length === 0) {
            el.innerHTML = originalHTML;
          }
        };
        
        // Process all elements
        result.elements.forEach(processElement);
        
        // Add methods that would be expected from the real SplitType
        result.revert = function() {
          result.elements.forEach(el => {
            el.innerHTML = el._originalHTML || '';
          });
        };
        
        return result;
      };
      
      // Add the static methods expected from SplitType
      window.SplitType.create = function(elements, options) {
        return new window.SplitType(elements, options);
      };
      
      window.SplitType.revert = function(elements) {
        if (typeof elements === 'string') {
          elements = document.querySelectorAll(elements);
        }
        Array.from(elements).forEach(el => {
          el.innerHTML = el._originalHTML || '';
        });
      };
      
      console.log('SplitType polyfill created');
    }
  }
  
  // Check if the document is already loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initPolyfill();
  } else {
    // Otherwise wait for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', initPolyfill);
  }
  
  // Also check after window load to be sure
  window.addEventListener('load', initPolyfill);
})();
