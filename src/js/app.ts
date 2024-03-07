// LIBRARY IMPORTS
import barba, { ITransitionPage } from "@barba/core";
import { gsap } from "gsap";

// CUSTOM CODE IMPORTS

// Uncomment this if you want to stop users from routing mid animation
// if(barba.transitions.isRunning) {
// 	 return;
// }

// Default page fade transition
const genericTransition: ITransitionPage = {
  // When the site first loads, this code will run
  // Can this ever run during the 'self' transition?
  once(data: any) { },
  // Before current component leaves, set next to not take up dom space
  before(data: any) {
    gsap.set(data.next.container, {
      opacity: 0,
      position: "absolute",
      force3D: true,
      ease: "power2.out",
    });
  },
  // During leave, animate current to no opacity
  leave(data: any) {
    return new Promise((resolve: any) => {
      gsap.to(data.current.container, {
        opacity: 0,
        duration: 0.5,
        force3D: true,
        ease: "power2.out",
        onComplete: () => resolve(),
      });
    });
  },
  // Once next container enters, animate it to opacity 1
  enter(data: any) {
    window.scrollTo(0, 0);

    gsap.set(data.next.container, {
      position: "relative",
    });
    gsap.set(data.current.container, {
      display: "none",
    });
    return new Promise((resolve: any) => {
      gsap.to(data.next.container, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        force3D: true,
        onComplete: () => resolve(),
      });
    });
  },
};

// Barba replaces a multi-page app (w/ a refresh whenever the user navigates) with a single
// page app philosophy.
barba.init({
  // If we want to force a refresh on navigation, class='prevent-barba' on the element
  prevent: ({ el }) => el.classList && el.classList.contains("prevent-barba"),

  // When user hovers a link, Barba will try to fetch+cache that page in case the user navigates.
  // If there is a large list of links and the user hovers all of them quickly, this
  // can cause those links to fail
  prefetchIgnore: true,

  // If trying to get a large page, ensure BarbaJS doest give up too early
  timeout: 5000,
  transitions: [
    // When a user goes to the same route or just clicks an anchor link
    {
      name: "self",
    },
    // Default pages
    {
      name: "default-transition",
      // Sync means all animations will play at the same time (before+...+enter)
      // Rather than one at a time (before -> .... -> enter)
      sync: true,
      ...genericTransition,
    },
  ],
});


// After any transition, rerun any JS over the newly rendered elements
barba.hooks.after((data: any) => { });
