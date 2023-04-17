import barba from "@barba/core";
import { gsap } from "gsap";

import "../scss/main.scss";

barba.init({
	debug: true,
	transitions: [
 // Default
 {
	name: "default-transition",
	sync: true,
	once() {},
	leave(data) {
		return new Promise((resolve) => {
			gsap.to(data.current.container, {
				xPercent: -100,
				duration: 0.5,
				force3D: true,
				ease: "power2.out",
				onComplete: () => {
					resolve(undefined);
				},
			});
		});
	},
	enter(data) {
		return new Promise((resolve) => {
			gsap.set(data.current.container, {
				position: "absolute",
			});
			gsap.set(data.next.container, { xPercent: 100 });
			gsap.to(data.next.container, {
				xPercent: 0,
				duration: 0.5,
				ease: "power2.out",
				force3D: true,
				onComplete: () => {
					resolve(undefined);
				},
			});
		});
	},
},
{
			name: 'self',
			enter() {
			  // create your self transition here
			},
		  }
	],
});

barba.hooks.once((data) => {
	
});

barba.hooks.enter((data) => {});
