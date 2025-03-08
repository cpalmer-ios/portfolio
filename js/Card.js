/**
 * Card class for handling card animations and interactions.
 */
class Card {
    constructor(id, element) {
        this.id = id;
        this.element = element;
        this.isOpen = false;
        this.timeline = null;
        this.init();
    }

    init() {
        // Initialize card properties
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.position = {
            x: this.element.offsetLeft,
            y: this.element.offsetTop
        };
    }

    openCard(onCardMove) {
        this.isOpen = true;
        
        if (!this.timeline) {
            this.timeline = new TimelineLite({
                onUpdate: () => {
                    const track = {
                        width: this.element.offsetWidth,
                        height: this.element.offsetHeight,
                        x: this.element.offsetLeft,
                        y: this.element.offsetTop
                    };
                    if (typeof onCardMove === 'function') {
                        onCardMove(track);
                    }
                }
            });
        }

        // Open animation
        this.timeline.clear();
        this.timeline
            .to(this.element, {
                duration: 0.8,
                ease: "power4.inOut",
                scale: 1.1,
                y: -40
            })
            .to(this.element.querySelector('.card__container'), {
                duration: 0.6,
                ease: "power4.inOut",
                className: "card__container"
            });

        return this.timeline;
    }

    closeCard() {
        this.isOpen = false;

        // Close animation
        this.timeline.clear();
        this.timeline
            .to(this.element, {
                duration: 0.8,
                ease: "power4.inOut",
                scale: 1,
                y: 0
            })
            .to(this.element.querySelector('.card__container'), {
                duration: 0.6,
                ease: "power4.inOut",
                className: "card__container card__container--closed"
            });

        return this.timeline;
    }

    hideCard() {
        return gsap.to(this.element, {
            duration: 0.8,
            ease: "power4.inOut",
            scale: 0.8,
            opacity: 0
        });
    }

    showCard() {
        return gsap.to(this.element, {
            duration: 0.8,
            ease: "power4.inOut",
            scale: 1,
            opacity: 1
        });
    }
} 