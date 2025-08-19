 let imageProfile = this.document.getElementById('profile');
 imageProfile.addEventListener('load',function(){
    this.parentElement.classList.add('loaded-animation');
      let text = document.getElementById('myname');
    let char = SplitText.create(text,{type : 'chars'});
    let tl = gsap.timeline();

    tl.from(char.chars,{y:10,stagger : 0.1,opacity : 0})
      .from('.headerPTags',{y:10,opacity : 0})
      .from('.headerSocials',{y:10,opacity : 0})
 })
    


gsap.from('#aboutMe,#becameInterested',{
  scrollTrigger:{
    trigger : '#aboutMe,#becameInterested',
  },
  y: 50,         
  autoAlpha:0,
  duration: 2,
  stagger:1
  
})
