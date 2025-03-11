// Define TextAnimator in the global scope
window.TextAnimator = class {
  // Define letters and symbols as a static property
  static lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];

  constructor(textElement) {
    // Check if the provided element is valid.
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error('Invalid text element provided.');
    }

    this.textElement = textElement;
    this.originalText = textElement.textContent || ''; // Store original text content
    this.originalChars = []; // Store the original characters
    this.splitText();
  }

  splitText() {
    // Split text for animation and store the reference.
    this.splitter = new TextSplitter(this.textElement, {
      splitTypeTypes: 'words, chars'
    });

    // Save the initial state of each character
    this.originalChars = this.splitter.getChars().map(char => char.innerHTML);
  }

  animate() {
    // Reset any ongoing animations
    this.reset();

    // Query all individual characters in the line for animation.
    const chars = this.splitter.getChars();
    
    console.log('Animating text:', {
      element: this.textElement,
      chars: chars.length,
      originalChars: this.originalChars.length
    });

    // Ensure we have characters to animate
    if (!chars.length) {
      console.warn('No characters found to animate');
      return;
    }

    // Create master timeline for all characters
    const masterTimeline = new TimelineLite();

    chars.forEach((char, position) => {
      if (!char) {
        console.warn('Null character found at position', position);
        return;
      }

      let initialHTML = char.innerHTML;
      
      // Set initial state
      TweenLite.set(char, { opacity: 1 });

      const charTimeline = new TimelineLite({
        delay: position * 0.03
      });

      // Add random character animations
      for (let i = 0; i < 3; i++) {
        // Use onStart and onComplete callbacks instead of trying to tween innerHTML
        charTimeline.to(char, 0.1, {
          opacity: 1,
          onStart: function() {
            // Set to a random character on start
            const randomChar = TextAnimator.lettersAndSymbols[Math.floor(Math.random() * TextAnimator.lettersAndSymbols.length)];
            char.innerHTML = randomChar;
          }
        });
      }

      // Return to original character
      charTimeline.to(char, 0.1, {
        opacity: 1,
        onStart: function() {
          // Set back to original character
          char.innerHTML = initialHTML;
        }
      });

      masterTimeline.add(charTimeline, position * 0.02);
    });

    // Only animate the text element if it exists
    if (this.textElement) {
      masterTimeline.to(this.textElement, 0.5, {
        '--anim': 1,
        ease: Power2.easeOut
      }, 0);
    }
  }

  animateBack() {
    if (!this.textElement) return;
    
    TweenLite.killTweensOf(this.textElement);
    TweenLite.to(this.textElement, 0.3, {
      '--anim': 0,
      ease: Power2.easeIn
    });
  }

  reset() {
    if (!this.textElement) return;
    
    try {
      // Kill any ongoing animations
      TweenLite.killTweensOf(this.textElement);
      
      // Reset the text to its original state
      const chars = this.splitter.getChars();
      
      if (chars && chars.length > 0) {
        chars.forEach((char, index) => {
          if (char) {
            TweenLite.killTweensOf(char);
            // Directly set innerHTML instead of using TweenLite
            if (index < this.originalChars.length) {
              char.innerHTML = this.originalChars[index] || '';
            }
          }
        });
      } else {
        // If no chars are found, restore from original text
        if (this.originalText) {
          this.textElement.textContent = this.originalText;
        }
      }

      // Reset the container animation state
      TweenLite.set(this.textElement, {
        '--anim': 0
      });
    } catch (error) {
      console.error('Error in reset:', error);
      // Try to restore original content as a fallback
      if (this.originalText) {
        this.textElement.textContent = this.originalText;
      }
    }
  }
}