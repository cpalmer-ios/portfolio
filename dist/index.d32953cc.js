// Use the global TweenMax/TimelineLite instead of gsap
// No need to set gsap = window.gsap since we're now using TweenMax/TimelineLite directly
// DOM elements
const DOM = {
    // For demo purposes, trigger the effect when clicking any link in the menu (.line-link)
    menuLinks: [
        ...document.querySelectorAll(".line-link")
    ],
    list: document.querySelectorAll(".list"),
    // Cover element (wrap, outer and image inner elements)
    cover: {
        wrap: document.querySelector(".cover-wrap"),
        outer: document.querySelector(".cover"),
        inner: document.querySelector(".cover__inner")
    },
    // Some of the main page content elements
    // We'll animate some of the content elements when expanding the menu
    content: {
        imgs: [
            ...document.querySelectorAll(".wrapper-jfish")
        ],
        titles: [
            ...document.querySelectorAll(".content__text")
        ]
    },
    // Menu element (.menu)
    menu: document.querySelector(".menu"),
    // Element that slides out
    menuContent: document.querySelector(".menu__content"),
    // Close button
    closeCtrl: document.querySelector(".menu__back"),
    // Extra elements that will be animated inside the menu
    extra: document.querySelectorAll(".menu__tagline, .menu__social-author")
};
let menuStatus = {
    isOpen: false,
    isAnimating: false
};
// Animation timeline - using TimelineLite instead of gsap.timeline()
const menuTimeline = new TimelineLite({
    paused: true,
    onComplete: ()=>menuStatus.isAnimating = false,
    onReverseComplete: ()=>menuStatus.isAnimating = false,
    defaults: {
        duration: 1.2,
        ease: Power4.easeInOut
    }
}).addLabel("start", 0).add(()=>{
    // Add pointer events to auto/none
    DOM.menu.classList[menuStatus.isOpen ? "add" : "remove"]("menu--open");
}, "start").to(DOM.cover.wrap, 1.6, {
    startAt: {
        scale: "1.1"
    },
    ease: Power3.easeInOut,
    scale: 1
}, "start").to(DOM.cover.outer, 1.2, {
    startAt: {
        y: "-100%"
    },
    y: "0%",
    ease: Power4.easeInOut
}, "start").to(DOM.cover.inner, 1.2, {
    startAt: {
        y: "100%"
    },
    y: "0%",
    ease: Power4.easeInOut
}, "start").to(DOM.content.imgs, 1.2, {
    ease: Power3.easeInOut,
    y: (position)=>`${position % 2 === 0 ? -20 : 20}%`
}, "start").to(DOM.list, 1.2, {
    ease: Power3.easeInOut,
    y: (position)=>`${position % 2 === 0 ? -20 : 20}%`,
    opacity: 0
}, "start").to(DOM.content.titles, 1.2, {
    ease: Power3.easeInOut,
    y: (position)=>`${position % 2 === 0 ? 20 : -20}%`,
    opacity: 0
}, "start").addLabel("menu", 0.5).to(DOM.menuContent, 1, {
    startAt: {
        y: "-100%"
    },
    y: "0%",
    ease: Power4.easeInOut
}, "menu").addLabel("extra", "menu+=0.6").set(DOM.extra, {
    y: "400%",
    opacity: 0
}, "start").to(DOM.extra, 0.5, {
    ease: Power4.easeOut,
    startAt: {
        opacity: 1
    },
    opacity: 1,
    y: "0%"
}, "extra");
// Menu expand
const expandMenu = ()=>{
    if (menuStatus.isAnimating || menuStatus.isOpen) return;
    menuStatus.isAnimating = true;
    menuStatus.isOpen = true;
    menuTimeline.play();
};
// Menu collapse
const collapseMenu = ()=>{
    if (menuStatus.isAnimating || !menuStatus.isOpen) return;
    menuStatus.isAnimating = true;
    menuStatus.isOpen = false;
    menuTimeline.reverse(0);
};
// Expand the menu when pressing any of the menu top links...
DOM.menuLinks.forEach((link)=>{
    link.addEventListener("click", (ev)=>{
        ev.preventDefault();
        expandMenu();
    });
});
// Collapse it when pressing the close button
DOM.closeCtrl.addEventListener("click", (ev)=>{
    ev.preventDefault();
    collapseMenu();
});
// Select elements
const navTopLinks = document.querySelectorAll(".menu__nav-top .line-link");
const tagline = document.querySelector(".menu__tagline");
const navContent = document.querySelector(".menu__nav-content");
// Data to populate the menu with
const menuData = {
    Tech: {
        tagline: "Tech",
        columns: [
            {
                title: "Employers",
                links: [
                    {
                        title: "Eeze",
                        url: "https://eeze.com/"
                    },
                    {
                        title: "Financial Times",
                        url: "https://www.ft.com/"
                    },
                    {
                        title: "\xd8stmodern",
                        url: "https://www.ostmodern.co/"
                    },
                    {
                        title: "NTT DATA - Sky | L&G",
                        url: "https://www.nttdata.com/global/en/"
                    },
                    {
                        title: "Fin-Ex UK",
                        url: "https://fin-ex.com/"
                    },
                    {
                        title: "Penguin Random House",
                        url: "https://www.penguin.com/"
                    }
                ]
            }
        ]
    },
    About: {
        tagline: "About",
        columns: [
            {
                title: "Personal",
                links: [
                    {
                        title: "Education",
                        url: "#",
                        modalId: "modal2",
                        onclick: openEducation
                    }
                ]
            },
            {
                title: "History",
                links: [
                    {
                        title: "Full Resume",
                        url: "#",
                        modalId: "modal3",
                        onclick: openResume
                    }
                ]
            },
            {
                title: "Publications",
                links: [
                    {
                        title: "Medium",
                        url: "https://medium.com/@writetochrispalmer"
                    },
                    {
                        title: "LinkedIn",
                        url: "#",
                        modalId: "modal1",
                        onclick: openLinkedIn
                    }
                ]
            }
        ]
    },
    Contact: {
        tagline: "Contact",
        columns: [
            {
                title: "Contact",
                links: [
                    {
                        title: "Email",
                        url: "mailto:write.to.chris.palmer@gmail.com"
                    },
                    {
                        title: "GitHub",
                        url: "https://github.com/cpalmer-ios"
                    }
                ]
            }
        ]
    }
};
// Function to update the menu content
const updateMenuContent = (category)=>{
    const data = menuData[category];
    if (!data) return;
    // Update the tagline
    tagline.textContent = data.tagline;
    // Clear existing content
    navContent.innerHTML = "";
    // Create and append columns
    data.columns.forEach((column)=>{
        const columnElement = document.createElement("div");
        columnElement.className = "column";
        // Add column title
        const columnTitle = document.createElement("h4");
        columnTitle.className = "column__title";
        columnTitle.textContent = column.title;
        columnElement.appendChild(columnTitle);
        // Add links
        column.links.forEach((link)=>{
            const linkElement = document.createElement("a");
            linkElement.className = "line-link";
            linkElement.href = link.url;
            linkElement.target = "blank";
            // Set the link text
            linkElement.textContent = link.title;
            // Check if an 'onclick' function exists and add it
            if (link.onclick) {
                linkElement.setAttribute("aria-controls", link.modalId);
                linkElement.addEventListener("click", (e)=>{
                    e.preventDefault(); // Prevent the default link behavior
                    link.onclick(e); // Execute the custom onclick function
                });
            }
            // Append the link element to the column
            columnElement.appendChild(linkElement);
        });
        // Append column to navContent
        navContent.appendChild(columnElement);
    });
};
// Add event listeners to the top nav links
navTopLinks.forEach((link)=>{
    link.addEventListener("click", (event)=>{
        event.preventDefault(); // Prevent default link behavior
        const category = link.textContent.trim(); // Get the category text
        updateMenuContent(category); // Update the menu content
    });
});
// Reference to the modal elements
const modal = document.getElementById("linkModal");
const modalLinks = document.getElementById("modalLinks");
const closeModal = document.querySelector(".modal-close");
// Event listener for closing the modal
if (closeModal) closeModal.addEventListener("click", ()=>{
    modal.style.display = "none"; // Hide the modal
});
// Close the modal when clicking outside of the modal content
window.addEventListener("click", (e)=>{
    if (modal && e.target === modal) modal.style.display = "none"; // Hide the modal when clicking outside
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Initialize ScrollTrigger if it exists
    ScrollTrigger;
});

//# sourceMappingURL=index.d32953cc.js.map
