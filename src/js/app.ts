import barba from "@barba/core";
import { gsap } from "gsap";
import $ from "jquery";

// if(barba.transitions.isRunning) {
//   prevent routing button clicks
// 	 return;
// }

const genericTransition = {
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

// Hooks for page transitions
barba.init({
  prevent: ({ el }) => el.classList && el.classList.contains("prevent-barba"),
  transitions: [
    // Same route animation
    {
      name: "self",
    },
    // Default pages
    {
      name: "default-transition",
      sync: true,
      ...genericTransition,
    },
  ],
});

// same as $(document).ready()
$(() => {});

// $(() => {}) will never trigger after first load
// So tie into enter hook to hydrate components
barba.hooks.enter(() => {});

// TODO: Remove before beginning development
barba.hooks.once((data: any) => {});

barba.hooks.enter((data: any) => {});
