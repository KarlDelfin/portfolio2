
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(SplitText);


/* LENIS SCROLL */
let lenis = new Lenis()
gsap.ticker.add((time)=>{ lenis.raf(time * 300) })
gsap.ticker.lagSmoothing(0)

/* HERO */
let heroInfoH1 = new SplitText('.hero_info h1', {type: 'words'})
let heroInfoP = new SplitText('.hero_info p', {type: 'lines'})

let heroInfoTl = gsap.timeline({
    stagger: {
      each: 0.1,
    }
})

heroInfoTl.from(heroInfoH1.words, {
  y: 50,
  opacity: 0,
})
heroInfoTl.from(heroInfoP.lines, {
  y: 50,
  opacity: 0,
})


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
let heroVideoInfoH2 = new SplitText('.hero_video_info h2', {type: 'lines'})

let heroVideoInfo = gsap.timeline({
   scrollTrigger: {
    trigger: '.hero_video_info',
    scrub: 1,
    start: 'top bottom',
    end: 'bottom 80%',
  }
})

heroVideoInfo.from(heroVideoInfoP.chars, {
  y: 50,
  opacity: 0,
  stagger: 0.1,
})

heroVideoInfo.from(heroVideoInfoH2.lines, {
  x: 100,
  y: 100,
  opacity: 0,
  stagger: {
    each: 0.1,
    from: 'random'
  }
})

gsap.from('.circles_con div', {
  scale: 0,
  ease: 'elastic.out',
  stagger: {
    each: 0.3,
    from: 'edges'
  },
  scrollTrigger: {
    trigger: '.circles_con',
    scrub: 1,
    start: 'top bottom',
    end: 'bottom center',
  }
})