function loader() {
  let tl =  gsap.timeline();

  document.getElementById('HeaderId').style.display = 'none';

  tl.from("#loader h3", {
    x: 120,
    opacity: 0,
    duration: 1,
    stagger: .09
  })

  tl.to("#loader h3", {
    opacity: 0,
    x: -30,
    duration: 1,
    stagger: .09
  })

   tl.to("#loader", {
    opacity: 0
  })

   tl.to("#loader", {
    display: "none",
    onComplete: function () {
      document.getElementById('loader').style.display = 'none';
      
      document.getElementById('HeaderId').style.display = 'block';
      setTimeout(function () {
        gsap.to("#bg-img", { opacity: 1, duration: 0.2 });
      }, 200);
      setTimeout(function () {
        gsap.to("#boy-img", { opacity: 1, duration: 0.5, });
      }, 500);
    }
  })

  document.getElementById('boy-img').style.opacity = 0;
  document.getElementById('bg-img').style.opacity = 0;
  // document.body.style.overflow = 'hidden'
}
loader();

function TextReveal() {
  setTimeout(function () {
    gsap.from("#content-left h2", {
      x: -100,
      opacity: 0,
      ease: "power4.inOut",
      duration: 2,
      delay: 1.2, // Slight delay for h2
    });

    gsap.from("#content-left p", {
      x: -100,
      opacity: 0,
      ease: "power4.inOut",
      duration: 2,
      delay: 1.4, // Slight delay for p
    });

    gsap.from("#content-left button", {
      x: -100,
      opacity: 0,
      ease: "power4.inOut",
      duration: 2,
      delay: 1.6, // Slight delay for button
    });

  }, 10);

  setTimeout(function () {
    gsap.from("#content-right-avard-first", {
      x: 50,
      opacity: 0,
      ease: "power4.inOut",
      duration: 2,
      delay: 1.1, // Slight delay for h2
    });

    gsap.from("#content-right-avard-second", {
      x: 50,
      opacity: 0,
      ease: "power4.inOut",
      duration: 2,
      delay: 1.3, // Slight delay for h2
    });

    gsap.from("#content-right-avard-third", {
      x: 50,
      opacity: 0,
      ease: "power4.inOut",
      duration: 2,
      delay: 1.5, // Slight delay for h2
    });
  }, 10)
}
TextReveal();

function numberReveal() {
  setTimeout(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      counter.innerHTML = '0'

      const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText;

        const increment = target / 1800;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 10)
        }
      };
      updateCounter()
    })
  }, 1600)
}
numberReveal();

function attachMouseMoveEvent() {
  const btn = document.querySelector('button');
  btn.onmousemove = function (e) {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  }
}
attachMouseMoveEvent();

// function init() {
//   gsap.registerPlugin(ScrollTrigger);
 
//   const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true
//   });

//   locoScroll.on("scroll", ScrollTrigger.update);

//   // Configure ScrollTrigger proxy for Locomotive Scroll
//   ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//           return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//           return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//       }
//   });

//   // Additional configuration for the header pinType
//   ScrollTrigger.scrollerProxy("#main", {
//       pinType: "fixed"
//   });

//   // Refresh and update ScrollTrigger and Locomotive Scroll
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   ScrollTrigger.defaults({ scroller: "#main" });
//   ScrollTrigger.refresh();
// }

// window.onload = function () {
//   init();
// };

function skillReveal() {
  const scrollers = document.querySelectorAll(".Skill-reveal-container");

  if (!window.matchMedia("(perfers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector('.Skill-reveal-inner');
      const scrollercontent = Array.from(scrollerInner.children);

      scrollercontent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
      })
    });
  }
}
skillReveal();

  gsap.set('header', {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  })

  const tl = gsap.timeline({
    ScrollTrigger: {
      start: 'top+=100',
      end: '+=1',
      toggleActions: 'play none none reverse',
      scrub: true
    }
  })

  tl.to('header', {
    fontsize: '10px'
  })