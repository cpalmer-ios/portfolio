// Import styles
import '../css/normalize.css';
import '../fonts/font-awesome-4.3.0/css/font-awesome.min.css';
import '../css/demo.css';
import '../css/card.css';
import '../css/pattern.css';

// Import GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Import Snap.svg
import Snap from 'snapsvg';
window.Snap = Snap;

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
window.gsap = gsap;

// Make GSAP available globally
window.ScrollTrigger = ScrollTrigger;
window.ScrollToPlugin = ScrollToPlugin;

// Import images
import '../img/jfish1.mp4';
import '../img/a.jpg';
import '../img/b.jpg';
import '../img/c.jpg';
import '../img/d.jpg';
import '../img/e.jpg';
import '../img/f.jpg';
import '../img/blot3.png';
import '../img/dots4.png';
import '../img/harvard.png';

// Import local scripts
import Card from '../js/Card.js';
import CardCircle from '../js/Card-circle.js';
import '../js/demo.js';
import '../js/demo1.js';
import '../js/charming.min.js';
import '../js/vendors/trianglify.min.js';
import '../js/vendors/cash.min.js';
import '../js/vendors/split-type.min.js';

// Make Card classes available globally
window.Card = Card;
window.CardCircle = CardCircle; 