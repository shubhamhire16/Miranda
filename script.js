//locomotove for smooth scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

//gsap for animation
var tl = gsap.timeline()

tl.to("#page1", {
  y:"100vh",
  scale:0.6,
  duration:0
})
tl.to("#page1", {
  y:"30vh",
  scale:1,
  duration:1
})
tl.to("#page1",{
  y:"0vh",
  rotate:360,
  scale:1,
  duration:1.2
})