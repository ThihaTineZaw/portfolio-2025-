document.addEventListener('DOMContentLoaded', (event)=>{
  // profile effect 

let profile = document.getElementById('profile');
function loadAnni() {
  profile.parentElement.classList.add('loaded-animation');
};
setTimeout(loadAnni, 3000);

let char = SplitText.create(document.getElementById('myname'), { type: 'chars' });
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
gsap.set('#workingExprienceBox-1',{autoAlpha:0,   x : -100});
gsap.set('#workingExprienceBox-2',{autoAlpha:0,   x : -100});
gsap.set('#workingExprienceBox-3',{autoAlpha:0,   x : -100});
gsap.set('#workingExperienceSection-header',{autoAlpha:0,   x : -100});
let ExperienceLineAndBox = gsap.timeline({
  scrollTrigger: {
    trigger: '#workingExprienceBoxes',
    start: 'top 90%'
  }
});
ExperienceLineAndBox.to('#workingExperienceSection-header',{x:0,autoAlpha:1})
  .to(workExpLine, {cssRule: { height: "100%" },duration: 3,ease: "power2.inOut"})
  .to('#workingExprienceBox-1', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#workingExprienceBox-2', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#workingExprienceBox-3', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5");

let learnedLine = CSSRulePlugin.getRule(".learnedBoxes::before");
gsap.set('#learndbox-1',{autoAlpha:0,   x : -100});
gsap.set('#learndbox-2',{autoAlpha:0,   x : -100});
gsap.set('#learndbox-3',{autoAlpha:0,   x : -100});
gsap.set('#learndbox-4',{autoAlpha:0,   x : -100});
gsap.set('#learndbox-5',{autoAlpha:0,   x : -100});
gsap.set('#learndbox-6',{autoAlpha:0,   x : -100});
gsap.set('#learned-section-header',{autoAlpha:0,   x : -100});

let learnedLineAndBox = gsap.timeline({
  scrollTrigger: {
    trigger: '#learnedBoxes',
    start: 'top 90%',
  }
});

learnedLineAndBox.to('#learned-section-header',{x:0,autoAlpha:1})
.to(learnedLine, {cssRule: { height: "100%" },duration: 3,ease: "power2.inOut"})
  .to('#learndbox-1', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#learndbox-2', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#learndbox-3', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#learndbox-4', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#learndbox-5', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  .to('#learndbox-6', {autoAlpha: 1,x: 0,ease: "power2.inOut"}, "<0.5")
  
// icon animation start 
gsap.fromTo('.icons',
  { 
    y: 100, 
    opacity: 0, 
    scale: 0.5 
  },
  { 
    y: 0,                    
    opacity: 1,
    scale: 1.1,
    duration: 1,
    stagger: 0.2,
    ease: "bounce.inOut",
    scrollTrigger: {
      trigger: '#icons-box',
      start: "top 80%", 
    }
  }
);
// icon animation end
// Experience Section End 

})

$(document).ready(function(){

  $('.projectBoxes-content').hide();
  $('#projectBox-01').mouseover(function(){
        $('#project01').fadeIn()
  });
  
    $('#projectBox-01').mouseleave(function(){
        $('#project01').fadeOut()
      
  })

  $('#projectBox-02').mouseover(function(){
        $('#project02').fadeIn()
  });
  
    $('#projectBox-02').mouseleave(function(){
        $('#project02').fadeOut()
      
  })

  $('#projectBox-03').mouseover(function(){
        $('#project03').fadeIn()
  });
  
    $('#projectBox-03').mouseleave(function(){
        $('#project03').fadeOut()
      
  })

  $('#projectBox-04').mouseover(function(){
        $('#project04').fadeIn()
  });
  
    $('#projectBox-04').mouseleave(function(){
        $('#project04').fadeOut()
      
  })
  
})