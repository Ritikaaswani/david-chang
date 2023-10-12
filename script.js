Shery.imageEffect("#back", {
    style:5,
   config: {"a":{"value":1.24,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"aspect":{"value":2.1852704927596696},"gooey":{"value":true},"infiniteGooey":{"value":true},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.02,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.45,"range":[0,2]},"noise_scale":{"value":14.95,"range":[0,100]}},
   gooey:true

})

var elem = document.querySelectorAll('.elem')
elem.forEach(function(elem){
   var h1s= elem.querySelectorAll("h1")
var index=0;
var animating=false;
var main = document.querySelector("#main")
   main.addEventListener("click",function(){
     if(!animating){
      animating= true;
      gsap.to(h1s[index],{
         top:"-=100%",
         duration:1,
         ease: Expo.easeInOut,
         onComplete: function(){
          gsap.set(this._targets[0],{top: '100%'})
          animating=false;
         },
      
      })
      index === h1s.length - 1 ? (index=0) : index++ ;
      gsap.to(h1s[index],{
         top:"-=100%",
         duration:1,
         ease: Expo.easeInOut,
      })
     }
   })
})


