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
        
        // Default options
        options = options || {};
        options.types = options.types || 'lines, words, chars';
        
        const types = options.types.toLowerCase().split(',').map(type => type.trim());
        const hasLines = types.includes('lines');
        const hasWords = types.includes('words');
        const hasChars = types.includes('chars');
        
        this.lines = [];
        this.words = [];
        this.chars = [];
        
        // Process each element
        Array.from(elements).forEach(element => {
          if (!element || element.nodeType !== 1) return;
          
          // Store original content for revert
          element.originalHTML = element.innerHTML;
          
          const content = element.textContent;
          
          // Clear element to rebuild
          element.innerHTML = '';
          
          // Create wrapper elements
          const wrapper = document.createElement('div');
          wrapper.className = 'split-type';
          wrapper.style.display = 'inline-block';
          wrapper.style.position = 'relative';
          
          if (hasWords || hasChars) {
            const words = content.split(/\s+/).filter(word => word.length > 0);
            
            words.forEach((word, wordIndex) => {
              // Create word element
              const wordEl = document.createElement('span');
              wordEl.className = 'word';
              wordEl.style.display = 'inline-block';
              wordEl.style.position = 'relative';
              wordEl.dataset.wordIndex = wordIndex;
              
              if (hasChars) {
                // Split word into characters
                Array.from(word).forEach((char, charIndex) => {
                  const charEl = document.createElement('span');
                  charEl.className = 'char';
                  charEl.style.display = 'inline-block';
                  charEl.style.position = 'relative';
                  charEl.dataset.charIndex = charIndex;
                  charEl.dataset.wordIndex = wordIndex;
                  charEl.textContent = char;
                  
                  wordEl.appendChild(charEl);
                  this.chars.push(charEl);
                });
              } else {
                // Just use the word text
                wordEl.textContent = word;
              }
              
              wrapper.appendChild(wordEl);
              if (wordIndex < words.length - 1) {
                // Add space between words
                const space = document.createElement('span');
                space.style.display = 'inline-block';
                space.innerHTML = '&nbsp;';
                wrapper.appendChild(space);
              }
              
              this.words.push(wordEl);
            });
          } else {
            // No splitting, just use original content
            wrapper.textContent = content;
          }
          
          // Add the wrapper to the element
          element.appendChild(wrapper);
          
          // Handle lines - simple version just creates one line
          if (hasLines) {
            const lineEl = document.createElement('div');
            lineEl.className = 'line';
            lineEl.style.display = 'block';
            lineEl.style.position = 'relative';
            // Clone the wrapper for the line
            lineEl.appendChild(wrapper.cloneNode(true));
            element.innerHTML = '';
            element.appendChild(lineEl);
            this.lines.push(lineEl);
          }
        });
      };
      
      // Add prototype methods
      window.SplitType.prototype.revert = function() {
        // This would normally revert the split text back to original
        // Simplified version for polyfill
        console.log('SplitType revert called');
      };
    } else {
      console.log('SplitType already defined, no polyfill needed');
    }
  }
  
  // Check if the document is already loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initPolyfill();
  } else {
    document.addEventListener('DOMContentLoaded', initPolyfill);
  }
})();
