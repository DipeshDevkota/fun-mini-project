var rect=document.querySelector("#center");

rect.addEventListener("mousemove",function(details){

    var rectlocation=rect.getBoundingClientRect();
     var insiderectval =details.clientX-rectlocation.left;
     
     if(insiderectval<rectlocation.width/2)
     {
var red=gsap.utils.mapRange(
    0,
    rectlocation.width/2,
    255,
    0,
insiderectval
);

 gsap.to(rect,{
    backgroundColor:`rgb(${red},0,0)`,
    ease:Power4,
 });
     }
        else
        {
            var blue=gsap.utils.mapRange(
                rectlocation.width/2,
                rectlocation.width,
                0,
                255,
            insiderectval);
            gsap.to(rect,{
               backgroundColor:`rgb(0,0,${blue})`,
               ease:Power4, 
        
     
});
        }
    });

rect.addEventListener("mouseleave",function()
    {
        gsap.to(rect,{
          backgroundColor:"white",
        })
        
    })