
//sheryJS
Shery.imageEffect(".back", {
  style: 5,
  config: {
    a: { value: 1.6, range: [0, 30] },
    b: { value: -0.95, range: [-1, 1] },
    aspect: { value: 2.0370967158576563 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.3, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.84, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.52, range: [0, 2] },
    noise_scale: { value: 15, range: [0, 100] },
  },
  gooey: true,
});

function toRevealSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

toRevealSpan();

var tl = gsap.timeline();

tl.from(".child .s1", {
  x: "50px",
  opacity: 0,
  duration: 0.5,
});
tl.from(".child .s2", {
  x: "51px",
  opacity: 0,
  delay: -0.3,
  duration: 0.5,
});
tl.from(".child .s3", {
  x: "53px",
  opacity: 0,
  delay: -0.3,
  duration: 0.5,
});
tl.from(".child .s4", {
  x: "60px",
  opacity: 0,
  delay: -0.3,
  duration: 0.5,
  ease: Circ.easeInOut,
  // stagger:.1
});

tl.to(".parent .child", {
  y: "-100%",
  duration: 1,
  ease: Circ.easeInOut,
});

tl.to(".loader", {
  height: 0,
  delay: -0.7,
  duration: 1,
  ease: Expo.easeInOut,
});
tl.to(".purplescr", {
  height: "100%",
  top: 0,
  delay: -1,
  duration: 1,
  ease: Expo.easeInOut,
});
tl.to(".purplescr", {
  height: 0,
  delay: -0.399,
  duration: 0.5,
  ease: "power4.inOut",
});
