

// Sticky menu
// let wrapper = document.querySelector(".wrapper")
// window.onscroll = function() {myFunction()};

// let navbar = document.querySelector(".container_menu");
// let sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky_menu")
//   } else {
//     navbar.classList.remove("sticky_menu");
//   }
// }

// Smooth scroll gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.5,
	effects: false
})


