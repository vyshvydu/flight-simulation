AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default:"#ringl" },
    },
update:function(){
    this.isCollided(this.data.elementId);
},
isCollided:function(elementId){
    const element=document.querySelector(elementId)
    element.addEventListener("collide",(e)=>{
      if(elementId.include("#ring")){
        console.log(elementId+"collision");
    } else if (elementId.includes("#hurdles")){
        console.log("bird collisiion")
    }

    });
},
});
