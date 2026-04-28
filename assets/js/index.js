
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(SplitText);


/* LENIS SCROLL */
let lenis = new Lenis()
gsap.ticker.add((time)=>{ lenis.raf(time * 300) })
gsap.ticker.lagSmoothing(0)

gsap.to('.hero_video', {
  maxWidth: '25%',
  scrollTrigger: {
    trigger: '.hero_video',
    scrub: 1,
    pin: true,
    end: '+=1000',
    pinSpacing: false
  }
})

let heroVideoInfoP = new SplitText('.hero_video_info p', {type: 'chars'})
let heroVideoInfoH2 = new SplitText('.hero_video_info h2', {type: 'words'})

let heroVideoInfo = gsap.timeline({
   scrollTrigger: {
    trigger: '.hero_video_info',
    scrub: 1,
    start: 'top center',
    end: 'bottom center',
    markers: true
  }
})

heroVideoInfo.from(heroVideoInfoP.chars, {
  x: 100,
  y: 100,
  opacity: 0,
  stagger: 0.1,
})

heroVideoInfo.from(heroVideoInfoH2.words, {
  x: 100,
  y: 100,
  opacity: 0,
  stagger: 0.1,
})