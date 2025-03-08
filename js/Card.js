(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Card = factory();
    }
}(typeof self !== 'undefined' ? self : this, function() {
    class Card {
        constructor(id, el) {
            this.id = id;
            this.el = el;
            this.isOpen = false;
            this.timeline = null;
        }

        init() {
            // Get card dimensions
            this.width = this.el.offsetWidth;
            this.height = this.el.offsetHeight;
            this.left = this.el.offsetLeft;
            this.top = this.el.offsetTop;
            
            // Set initial state
            gsap.set(this.el, {
                x: 0,
                y: 0,
                scale: 1
            });
        }

        openCard(onComplete) {
            if (this.isOpen) return;
            this.isOpen = true;

            // Create timeline for opening animation
            this.timeline = gsap.timeline({
                onComplete: () => {
                    if (typeof onComplete === 'function') {
                        onComplete();
                    }
                }
            });

            // Add animations to timeline
            this.timeline
                .to(this.el, {
                    duration: 0.8,
                    ease: 'power4.inOut',
                    scale: 1.1,
                    y: -20
                })
                .to(this.el, {
                    duration: 0.6,
                    ease: 'power2.out',
                    scale: 1,
                    y: 0
                });
        }

        closeCard(onComplete) {
            if (!this.isOpen) return;
            this.isOpen = false;

            // Create timeline for closing animation
            this.timeline = gsap.timeline({
                onComplete: () => {
                    if (typeof onComplete === 'function') {
                        onComplete();
                    }
                }
            });

            // Add animations to timeline
            this.timeline
                .to(this.el, {
                    duration: 0.6,
                    ease: 'power4.inOut',
                    scale: 1.1,
                    y: -20
                })
                .to(this.el, {
                    duration: 0.8,
                    ease: 'power2.out',
                    scale: 1,
                    y: 0
                });
        }

        hideCard() {
            gsap.to(this.el, {
                duration: 0.5,
                ease: 'power4.out',
                scale: 0.8,
                opacity: 0
            });
        }

        showCard() {
            gsap.to(this.el, {
                duration: 0.5,
                ease: 'power4.out',
                scale: 1,
                opacity: 1
            });
        }
    }

    return Card;
})); 