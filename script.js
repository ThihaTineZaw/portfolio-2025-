// profile effect 

let profile = document.getElementById('profile');
function loadAnni() {
  profile.parentElement.classList.add('loaded-animation');
};
setTimeout(loadAnni, 3000);


let text = document.getElementById('myname');
let char = SplitText.create(text, { type: 'chars' });
let tl = gsap.timeline();

tl.from(char.chars, { y: 10, stagger: 0.1, opacity: 0 })
  .from('.headerPTags', { y: 10, opacity: 0 })
  .from('.headerSocials', { y: 10, opacity: 0 })


gsap.from('#aboutMe', {
  scrollTrigger: {
    trigger: '#aboutMe',
    start: 'top 70%',
  },
  y: 50,
  autoAlpha: 0,
  duration: 0.5,
  stagger: 1,
})

gsap.from('#becameInterested', {
  scrollTrigger: {
    trigger: '#becameInterested',
    start: 'top 70%',
  },
  y: 50,
  autoAlpha: 0,
  duration: 0.5,
  stagger: 1

})

// Experience Section Start 
let workExpLine = CSSRulePlugin.getRule(".workingExprienceBoxes::before");
let learnedLine = CSSRulePlugin.getRule(".learnedBoxes::before");

gsap.set('#workingExprienceBox-1',{autoAlpha:0,   x : -100});
gsap.set('#workingExprienceBox-2',{autoAlpha:0,   x : -100});
gsap.set('#workingExprienceBox-3',{autoAlpha:0,   x : -100});

gsap.set('#learndbox-1',{autoAlpha:0,   x : -100});
gsap.set('#learndbox-2',{autoAlpha:0,   x : -100});
gsap.set('#learndbox-3',{autoAlpha:0,   x : -100});
gsap.set('#learndbox-4',{autoAlpha:0,   x : -100});
gsap.set('#learndbox-5',{autoAlpha:0,   x : -100});
gsap.set('#learndbox-6',{autoAlpha:0,   x : -100});

let ExperienceLineAndBox = gsap.timeline({
  scrollTrigger: {
    trigger: '#workingExprienceBoxes',
    start: 'top 90%'
  }
});

ExperienceLineAndBox.to(workExpLine, {cssRule: { height: "100%" },duration: 3,ease: "power2.inOut"})
  .to('#workingExprienceBox-1', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#workingExprienceBox-2', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#workingExprienceBox-3', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5");



let learnedLineAndBox = gsap.timeline({
  scrollTrigger: {
    trigger: '#learnedBoxes',
    markers: true,
    start: 'top 90%',
  }
});


learnedLineAndBox.to(learnedLine, {cssRule: { height: "100%" },duration: 3,ease: "power2.inOut"})
  .to('#learndbox-1', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#learndbox-2', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#learndbox-3', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#learndbox-4', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#learndbox-5', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#learndbox-6', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  






 










// Experience Section End 
