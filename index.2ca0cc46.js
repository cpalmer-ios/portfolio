"use strict";
/**
 * Demo2 - Updated with GSAP v3 syntax.
 */ // Use the global TextAnimator
const TextAnimator = window.TextAnimator;
var debounce = function(e, t, n) {
    var a;
    return function() {
        var r = this, i = arguments, o = function() {
            a = null, n || e.apply(r, i);
        }, s = n && !a;
        clearTimeout(a), a = setTimeout(o, t || 200), s && e.apply(r, i);
    };
};
var demo = function(window1, undefined) {
    /**
   * Enum of CSS selectors.
   */ var SELECTORS = {
        pattern: ".pattern",
        card: ".card",
        cardImage: ".card__image",
        cardClose: ".card__btn-close"
    };
    /**
   * Enum of CSS classes.
   */ var CLASSES = {
        patternHidden: "pattern--hidden",
        polygon: "polygon",
        polygonHidden: "polygon--hidden"
    };
    /**
   * Map of svg paths and points.
   */ var polygonMap = {
        paths: null,
        points: null
    };
    /**
   * Container of Card instances.
   */ var layout = {};
    /**
   * Initialise demo.
   */ function init() {
        // Pause before the animation starts
        setTimeout(function() {
            // Chris Palmer Text Animation
            var l = Snap("#logo");
            setTimeout(function() {
                // modify this one line below, and see the result !
                var logoTitle = "Chris Palmer";
                var logoRandom = "";
                var logoTitleContainer = l.text(0, "95%", "");
                var possible = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';
                logoTitleContainer.attr({
                    fontSize: 100,
                    // fontFamily: "Comfortaa",
                    fontWeight: "800",
                    color: "#212121"
                });
                function generateRandomTitle(i, logoRandom) {
                    setTimeout(function() {
                        logoTitleContainer.attr({
                            text: logoRandom
                        });
                    }, i * 125);
                }
                for(var i = 0; i < logoTitle.length + 1; i++){
                    logoRandom = logoTitle.substr(0, i);
                    for(var j = i; j < logoTitle.length; j++)logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
                    generateRandomTitle(i, logoRandom);
                    logoRandom = "";
                }
            }, 500); // This delay controls when the animation starts after the inner function is set up
        }, 2000); // Delay before starting the whole animation logic
        // For options see: https://github.com/qrohlf/Trianglify
        var pattern = Trianglify({
            width: window1.innerWidth,
            height: window1.innerHeight,
            cell_size: 90,
            variance: 1,
            stroke_width: 0.6,
            color_function: function(x, y) {
                // return "#de6551";
                return "#f0f0f0";
            }
        }).svg(); // Render as SVG.
        _mapPolygons(pattern);
        _bindCards();
    }
    /**
   * Store path elements, map coordinates and sizes.
   * @param {Element} pattern The SVG Element generated with Trianglify.
   * @private
   */ function _mapPolygons(pattern) {
        // Append SVG to pattern container.
        $(SELECTORS.pattern).append(pattern);
        // Convert nodelist to array,
        // Used `.childNodes` because IE doesn't support `.children` on SVG.
        polygonMap.paths = [].slice.call(pattern.childNodes);
        polygonMap.points = [];
        polygonMap.paths.forEach(function(polygon) {
            // Hide polygons by adding CSS classes to each svg path (used attrs because of IE).
            $(polygon).attr("class", CLASSES.polygon + " " + CLASSES.polygonHidden);
            var rect = polygon.getBoundingClientRect();
            var point = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };
            polygonMap.points.push(point);
        });
        // All polygons are hidden now, display the pattern container.
        $(SELECTORS.pattern).removeClass(CLASSES.patternHidden);
    }
    /**
   * Bind Card elements.
   * @private
   */ function _bindCards() {
        var elements = $(SELECTORS.card);
        $.each(elements, function(card, i) {
            var instance = new Card(i, card);
            layout[i] = {
                card: instance
            };
            var cardImage = $(card).find(SELECTORS.cardImage);
            var cardClose = $(card).find(SELECTORS.cardClose);
            $(cardImage).on("click", _playSequence.bind(this, true, i));
            $(cardClose).on("click", _playSequence.bind(this, false, i));
        });
    }
    /**
   * Create a sequence for the open or close animation and play.
   * @param {boolean} isOpenClick Flag to detect when it's a click to open.
   * @param {number} id The id of the clicked card.
   * @param {Event} e The event object.
   * @private
   *
   */ function _playSequence(isOpenClick, id, e) {
        var card = layout[id].card;
        // Prevent when card already open and user click on image.
        if (card.isOpen && isOpenClick) return;
        // Create timeline for the whole sequence.
        // Updated: Use gsap.timeline() instead of new TimelineLite()
        var sequence = gsap.timeline({
            paused: true
        });
        var tweenOtherCards = _showHideOtherCards(id);
        if (!card.isOpen) {
            // Open sequence.
            sequence.add(tweenOtherCards);
            sequence.add(card.openCard(_onCardMove), 0);
        } else {
            $(".menu").attr("class", "menu slide-down");
            // Close sequence.
            var closeCard = card.closeCard();
            var position = closeCard.duration() * 0.8; // 80% of close card tween.
            sequence.add(closeCard);
            sequence.add(tweenOtherCards, position);
        }
        sequence.play();
    }
    /**
   * Show/Hide all other cards.
   * @param {number} id The id of the clicked card to be avoided.
   * @private
   */ function _showHideOtherCards(id) {
        // Updated: Use gsap.timeline() instead of new TimelineLite()
        var TL = gsap.timeline();
        var selectedCard = layout[id].card;
        for(var i in layout){
            var card = layout[i].card;
            // When called with `openCard`.
            if (card.id !== id && !selectedCard.isOpen) TL.add(card.hideCard(), 0);
            // When called with `closeCard`.
            if (card.id !== id && selectedCard.isOpen) TL.add(card.showCard(), 0);
        }
        return TL;
    }
    /**
   * Callback to be executed on Tween update, whatever a polygon
   * falls into a circular area defined by the card width the path's
   * CSS class will change accordingly.
   * @param {Object} track The card sizes and position during the floating.
   * @private
   */ function _onCardMove(track) {
        var radius = track.width / 2;
        var center = {
            x: track.x,
            y: track.y
        };
        polygonMap.points.forEach(function(point, i) {
            if (_detectPointInCircle(point, radius, center)) $(polygonMap.paths[i]).attr("class", CLASSES.polygon);
            else $(polygonMap.paths[i]).attr("class", CLASSES.polygon + " " + CLASSES.polygonHidden);
        });
    }
    /**
   * Detect if a point is inside a circle area.
   * @private
   */ function _detectPointInCircle(point, radius, center) {
        var xp = point.x;
        var yp = point.y;
        var xc = center.x;
        var yc = center.y;
        var d = radius * radius;
        var isInside = Math.pow(xp - xc, 2) + Math.pow(yp - yc, 2) <= d;
        return isInside;
    }
    // Expose methods.
    return {
        init: init
    };
}(window);
// Kickstart Demo.
window.onload = demo.init;
document.addEventListener('scroll', ()=>{
    const frame = document.querySelector('.frame');
    if (!frame) return;
    // Check if user is near the bottom of the page
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollTop + windowHeight >= documentHeight - 1) frame.classList.add('visible');
    else frame.classList.remove('visible');
});
(function() {
    const buttons = document.querySelectorAll("[data-modal_trigger]");
    if (!buttons) return;
    const transitionLayer = document.querySelector("[data-modal_lightbox]");
    if (!transitionLayer) return;
    const transitionLayer_bg = transitionLayer.querySelector(".lightbox_bg");
    if (!transitionLayer_bg) return;
    const aspectRatio = 1.78; // Sprite png frame aspect ratio
    const frames = 25; // Number of sprite png frames
    function setLayerDimensions() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        let layerHeight;
        let layerWidth;
        if (windowWidth / windowHeight > aspectRatio) {
            layerWidth = Math.ceil(windowWidth);
            layerHeight = Math.ceil(layerWidth / aspectRatio);
        } else {
            layerHeight = Math.ceil(windowHeight);
            layerWidth = Math.ceil(layerHeight * aspectRatio);
        }
        requestAnimationFrame(()=>{
            transitionLayer_bg.style.width = layerWidth * frames + "px";
            transitionLayer_bg.style.height = layerHeight + "px";
        });
    }
    //set transitionBackground dimensions
    setLayerDimensions();
    window.addEventListener("resize", debounce(setLayerDimensions, 300, false));
})();
/* Open LinkedIn modal */ const openLinkedIn = function() {
    const buttons = document.querySelectorAll("[aria-controls^='modal1']");
    const transitionLayer = document.querySelector("[data-modal_lightbox]");
    const transitionLayer_bg = transitionLayer ? transitionLayer.querySelector(".lightbox_bg") : null;
    if (!buttons || !transitionLayer || !transitionLayer_bg) return;
    const btnOpenAttr = "aria-controls";
    const visibleClass = "-js-visible";
    const openingClass = "-js-opening";
    return (e)=>{
        e.preventDefault();
        const modelId = e.target.getAttribute(btnOpenAttr);
        if (!modelId) return;
        const modal = document.getElementById(modelId);
        if (!modal) return;
        transitionLayer.classList.add(visibleClass, openingClass);
        setTimeout(()=>{
            modal.classList.add(visibleClass);
        }, 800);
    };
}();
/* Open Education modal */ const openEducation = function() {
    const buttons = document.querySelectorAll("[aria-controls^='modal2']");
    const transitionLayer = document.querySelector("[data-modal_lightbox]");
    const transitionLayer_bg = transitionLayer ? transitionLayer.querySelector(".lightbox_bg") : null;
    if (!buttons || !transitionLayer || !transitionLayer_bg) return;
    const btnOpenAttr = "aria-controls";
    const visibleClass = "-js-visible";
    const openingClass = "-js-opening";
    return (e)=>{
        e.preventDefault();
        const modalId = e.target.getAttribute("aria-controls");
        if (!modalId) return;
        const modal = document.getElementById(modalId);
        if (!modal) return;
        transitionLayer.classList.add(visibleClass, openingClass);
        setTimeout(()=>{
            modal.classList.add(visibleClass);
        }, 800);
    };
}();
/* Open Resume modal */ const openResume = function() {
    const buttons = document.querySelectorAll("[aria-controls^='modal3']");
    const transitionLayer = document.querySelector("[data-modal_lightbox]");
    const transitionLayer_bg = transitionLayer ? transitionLayer.querySelector(".lightbox_bg") : null;
    if (!buttons || !transitionLayer || !transitionLayer_bg) return;
    const btnOpenAttr = "aria-controls";
    const visibleClass = "-js-visible";
    const openingClass = "-js-opening";
    return (e)=>{
        e.preventDefault();
        const modalId = e.target.getAttribute("aria-controls");
        if (!modalId) return;
        const modal = document.getElementById(modalId);
        if (!modal) return;
        transitionLayer.classList.add(visibleClass, openingClass);
        setTimeout(()=>{
            modal.classList.add(visibleClass);
        }, 800);
    };
}();
// Generalized modal logic
const openModal = (e)=>{
    e.preventDefault();
    const modalId = e.target.getAttribute("aria-controls");
    if (!modalId) return;
    const modal = document.getElementById(modalId);
    if (!modal) return;
    // Add visible class to open modal
    modal.classList.add("-js-visible");
    // Close modal logic
    const closeButton = modal.querySelector(".close-modal");
    if (closeButton) closeButton.addEventListener("click", ()=>{
        modal.classList.remove("-js-visible");
    });
};
/* Close modal from clicking modal_bg or button */ (function() {
    const modals = document.querySelectorAll(".modal1");
    if (!modals) return;
    const transitionLayer = document.querySelector("[data-modal_lightbox]");
    if (!transitionLayer) return;
    const transitionLayer_bg = transitionLayer.querySelector(".lightbox_bg");
    if (!transitionLayer_bg) return;
    const btnCloseAttr = "data-modal_close";
    const visibleClass = "-js-visible";
    const closingClass = "-js-closing";
    const openingClass = "-js-opening";
    const isNotCloseObj = (obj)=>{
        return !(obj.classList.contains(visibleClass) || obj.hasAttribute(btnCloseAttr));
    };
    const isVisible = (obj)=>{
        return obj.classList.contains(visibleClass);
    };
    const closeAnimStart = (e)=>{
        // In case it's an anchor
        e.preventDefault();
        const obj = e.target;
        if (isNotCloseObj(obj)) return;
        const modal = isVisible(obj) ? obj : obj.parentElement.parentElement;
        if (!modal) return;
        transitionLayer.classList.add(closingClass);
        transitionLayer.classList.remove(openingClass);
        modal.classList.remove(visibleClass);
        transitionLayer_bg.addEventListener("animationend", ()=>{
            transitionLayer.classList.remove(closingClass, visibleClass);
        }, {
            once: true
        });
    };
    for (const modal of modals)modal.addEventListener("click", closeAnimStart, false);
})();
/* Question button click */ (function() {
    const buttons = document.querySelectorAll(".menu__nav-top a.line-link");
    const clickedClass = "-js-clicked";
    for (const btn of buttons){
        btn.addEventListener("click", (e)=>{
            e.target.classList.add(clickedClass);
            e.target.addEventListener("animationend", (e)=>{
                e.target.classList.remove(clickedClass);
            }, false);
        }, false);
        btn.addEventListener("blur", (e)=>{
            e.target.classList.remove(clickedClass);
        }, false);
    }
    document.querySelectorAll('.list__item').forEach((item)=>{
        const cols = Array.from(item.querySelectorAll('.hover-effect'));
        const animators = cols.map((col)=>new TextAnimator(col));
        item.addEventListener('mouseenter', ()=>{
            animators.forEach((animator)=>animator.animate());
        });
        item.addEventListener('mouseleave', ()=>{
            animators.forEach((animator)=>animator.animateBack());
        });
    });
    // Same for all links
    document.querySelectorAll('a.hover-effect').forEach((item)=>{
        const animator = new TextAnimator(item);
        item.addEventListener('mouseenter', ()=>{
            animator.animate();
        });
        item.addEventListener('mouseleave', ()=>{
            animator.animateBack();
        });
    });
    setTimeout(()=>{
        document.body.classList.remove('loading');
    }, 100);
})();

//# sourceMappingURL=index.2ca0cc46.js.map
