import barba from "@barba/core";
// TODO: Remove before beginning development
import confetti from "canvas-confetti/src/confetti";
import { gsap } from "gsap";
import "../scss/main.scss";

barba.init({
	debug: true,
	transitions: [

		// Prevent flicker when navigating to same route
		{
			name: "self",
			enter() {},
		},
		// Default
		{
			name: "default-transition",
			sync: true,
			once() {},
			// Before current component leaves, set next to not take up dom space
			before(data) {
				gsap.set(data.next.container, {
					opacity: 0,
					position: "absolute",
					force3D: true,
					ease: "power2.out",
				});
			},
			// During leave, animate current to no opacity
			leave(data) {
				return new Promise((resolve) => {
					gsap.set(data.current.container, {
						opacity: 0,
						force3D: true,
						ease: "power2.out",
						onComplete: () => resolve(),
					});
				});
			},
			// Once next container enters, animate it to opacity 1
			enter(data) {
				gsap.set(data.next.container, {
					position: "relative",
				});
				gsap.set(data.current.container, {
					display: "none",
				});
				return new Promise((resolve) => {
					gsap.to(data.next.container, {
						opacity: 1,
						duration: 0.25,
						ease: "power2.out",
						force3D: true,
						onComplete: () => resolve(),
					});
				});
			},
		},
        
// TODO: Remove before beginning development
		// {
		// 	name: "to-ready",
		// 	to: {
		// 		namespace: ["ready"],
		// 	},

		// 	leave: (data) => {
		// 		return new Promise((resolve) => {
		// 			gsap.to(data.current.container, {
		// 				xPercent: -100,
		// 				duration: 0.3,
		// 				force3D: true,
		// 				ease: "power2.out",
		// 				onComplete: () => {
		// 					resolve();
		// 				},
		// 			});
		// 		});
		// 	},

		// 	enter: (data) => {
		// 		return new Promise((resolve) => {
		// 			gsap.set(data.next.container, { xPercent: 100 });
		// 			gsap.to(data.next.container, {
		// 				xPercent: 0,
		// 				duration: 0.3,
		// 				ease: "power2.out",
		// 				force3D: true,
		// 				onComplete: () => {
		// 					resolve();
		// 				},
		// 			});
		// 		});
		// 	},
		// },
		// {
		// 	name: "to-home",
		// 	to: {},
		// 	leave: (data) => {
		// 		return new Promise((resolve) => {
		// 			gsap.to(data.current.container, {
		// 				xPercent: 100,
		// 				duration: 0.3,
		// 				force3D: true,
		// 				ease: "power2.out",
		// 				onComplete: () => {
		// 					resolve();
		// 				},
		// 			});
		// 		});
		// 	},

		// 	enter: (data) => {
		// 		return new Promise((resolve) => {
		// 			gsap.set(data.next.container, { xPercent: -100 });
		// 			gsap.to(data.next.container, {
		// 				xPercent: 0,
		// 				duration: 0.3,
		// 				ease: "power2.out",
		// 				force3D: true,
		// 				onComplete: () => {
		// 					resolve();
		// 				},
		// 			});
		// 		});
		// 	},
		// },
	],
});

// TODO: Remove before beginning development
barba.hooks.once((data) => {
	
});

barba.hooks.enter((data) => {});
