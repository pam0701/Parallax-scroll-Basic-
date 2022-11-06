/* AOS.init({
  offset: 400,
  duration: 3000,
});
 */
/* 타임라인
let tl = gsap.timeline();
tl.to(".box1", {
  x: 1000,
  rotation: 720,
  duration: 3,
})
  .to(".box1", {
    backgroundColor: "orange",
    duration: 1,
  })
  .to(".box1", {
    x: 0,
    opacity: 0,
    duration: 3,
  }); */

/* 트리거 
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box1", {
  scrollTrigger: {
    trigger: ".box1",
    toggleActions: "restart",
    markers: true,
    scrub: true,
    end: "+=3000",
    pin: true,
  },
  x: 1000,
  rotation: 720,
  scaleX: 2,
  duration: 4,
});

gsap.from(".box2", {
  scrollTrigger: {
    trigger: ".box2",
    toggleActions: "restart",
    markers: true,
    scrub: true,
  },
  x: 1000,
  rotation: 720,
  scaleX: 2,
  duration: 4,
}); */

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrap",
    start: "top top",
    end: "+=4000",
    scrub: true,
    pin: true,
  },
});

tl.from(".orange", { xPercent: -100 })
  .from(".coral", { xPercent: 100 })
  .from(".blue", { yPercent: -100 });
