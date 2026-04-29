
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(SplitText);


/* LENIS SCROLL */
let lenis = new Lenis()
gsap.ticker.add((time)=>{ lenis.raf(time * 300) })
gsap.ticker.lagSmoothing(0)

/* HERO */
let heroInfoH1 = new SplitText('.hero_info h1', {type: 'lines, words', linesClass: "line"})
let heroInfoP = new SplitText('.hero_info p', {type: 'lines, chars', linesClass: "line"})

let heroInfoTl = gsap.timeline({ })

heroInfoTl.from(heroInfoH1.words, {
  y: 100,
  stagger: {
    each: 0.1,
    from: 'random'
  }
})

heroInfoTl.from(heroInfoP.chars, {
  y: 100,
  stagger: {
    each: 0.01,
  }
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

/* MAIN */
gsap.from('#main .circles_con div', {
  scale: 0,
  ease: 'back.inOut',
  stagger: {
    each: 0.3,
    from: 'end'
  },
  scrollTrigger: {
    trigger: '#main .circles_con',
    scrub: 1,
    start: 'top bottom',
    end: 'bottom center',
  }
})


let mainInfoH2 = new SplitText('.main_info h2', {type: 'lines, words', linesClass: 'line'})
gsap.from(mainInfoH2.words, {
  y: 100,
  stagger: {
    each: 0.5,
    from: 'random'
  },
  scrollTrigger: {
    trigger: '.main_info h2',
    scrub: 1,
    start: 'top center',
    end: 'bottom center',
  }
})


gsap.to('.main_cards div', {
  y: -500,
  rotate: 'random(-360, 360)',
  ease: 'elastic.inOut',
  stagger: {
    each: 0.1,
    from: 'end'
  },
    scrollTrigger: {
      trigger: '.main_cards',
      scrub: 1,
      pin: true,
      start: 'top 25%',
      end: '+=1000',
    }
})

/* BOTTOM */
gsap.from('#bottom .circles_con div', {
  scale: 0,
  ease: 'back.inOut',
  stagger: {
    each: 0.3,
    from: 'start'
  },
  scrollTrigger: {
    trigger: '#bottom .circles_con',
    scrub: 1,
    start: 'top bottom',
    end: 'bottom center',
  }
})