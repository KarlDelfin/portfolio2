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

/* BOTTOM 1*/
gsap.from('#bottom1 .circles_con div', {
  scale: 0,
  ease: 'back.inOut',
  stagger: {
    each: 0.3,
    from: 'start'
  },
  scrollTrigger: {
    trigger: '#bottom1 .circles_con',
    scrub: 1,
    start: 'top bottom',
    end: 'bottom center',
  }
})

let bottomInfoH2 = new SplitText('.bottom1_heading h2', {type: 'lines, chars', linesClass: 'line'});

gsap.from(bottomInfoH2.chars, {
  x: -100,
  opacity: 0,
  stagger: {
    each: 0.2,
  },
  scrollTrigger: {
    trigger: '.bottom1_heading',
    scrub: 5,
    start: 'top center',
    end: 'bottom center',
  }
})

document.querySelectorAll('.bottom1_con').forEach((section) => {
  const images = section.querySelectorAll('.bottom1_images img');
  
  gsap.fromTo(images,
    {
      scale: 0,
      rotation: () => gsap.utils.random(-180, 180),
    },
    {
      scale: 1,
      rotation: () => gsap.utils.random(-20, 20),
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        scrub: true,
        start: 'top center',
        end: 'bottom bottom',
      }
    }
  );

  const bottom1P = section.querySelectorAll('.bottom1_info p');
  gsap.from(bottom1P, {
    y: 100,
    x: 1000,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      scrub: true,
      start: 'top 20%',
      end: 'bottom bottom',
    }
  });
});

/* BOTTOM 2 */
gsap.from('#bottom2 .circles_con div', {
  scale: 0,
  ease: 'back.inOut',
  stagger: {
    each: 0.3,
    from: 'end'
  },
  scrollTrigger: {
    trigger: '#bottom2 .circles_con',
    scrub: 1,
    start: 'top bottom',
    end: 'bottom center',
  }
})

let bottom2P = new SplitText('.bottom2_con p', {type: 'chars',});
gsap.fromTo(bottom2P.chars,
  {
    y: 500,
    x: 2000,
    rotation: -10,
  },
  {
    x: 0,
    y: 0,
    rotation: (i) => Math.sin(i * 0.5) * 10,
    stagger: {
      each: 0.04,
    },
    ease: "back.out",
    duration: 1,
    scrollTrigger: {
      trigger: '.bottom2_con',
      scrub: 3,
      start: 'top 10%',
      end: 'bottom 60%',
      pin: true,
      pinSpacing: false,
    }
  }
);

/* FOOTER */
gsap.from('#footer .circles_con div', {
  scale: 0,
  ease: 'back.inOut',
  stagger: {
    each: 0.3,
    from: 'start'
  },
  scrollTrigger: {
    trigger: '#footer .circles_con',
    scrub: 1,
    start: 'top bottom',
    end: 'bottom 80%',
  }
})

/* MATCH MEDIA */
let mm = gsap.matchMedia();

mm.add("(max-width: 1800px)", () => {
  gsap.set('.hero_video', { clearProps: 'all' });
  ScrollTrigger.getAll().forEach(st => st.trigger?.matches('.hero_video') && st.kill());


});

mm.add("(max-width: 1400px)", () => {
  
});

mm.add("(max-width: 1010px)", () => {
  
});

mm.add("(max-width: 800px)", () => {
  gsap.set('.main_cards div, .main_cards, .bottom1_images img, .bottom1_info p, .bottom1_con', {clearProps: 'all'})
  ScrollTrigger.getAll().forEach(st => st.trigger?.matches('.main_cards div, .main_cards, .bottom1_images img, .bottom1_info p, .bottom1_con') && st.kill());
});

mm.add("(max-width: 600px)", () => {

});