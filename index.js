
AOS.init();
$(".shop").on("mouseover", () => {
  $(".shopingProduct").removeClass("hidden");
});
$(".shopingProduct ").on("mouseleave", () => {
  $(".shopingProduct").addClass("hidden");
});

$(".variety-btn").on("mouseover", () => {
  $(".variety-pack").removeClass("scale-110");
});
function animation(bottle , peachIngredientBtn , peachingredient) {
  
$(peachIngredientBtn).on("mouseover",()=>{
  $(peachingredient).removeClass("-scale-50");

  $(bottle).addClass("rotate-3")

})
 $(peachIngredientBtn).on("mouseout",()=>{
  $(peachingredient).addClass("-scale-50");

  $(bottle).removeClass("rotate-3")

})
$(bottle).on("mouseover",()=>{
  $(peachingredient).removeClass("-scale-50");

   $(bottle).addclass("rotate-3")

})

$(bottle).on("mouseout",()=>{
  $(peachingredient).addClass("-scale-50");
  $(bottle).removeClass("rotate-3")
  

})
}
var peachbottle = ".peachbottle"
var peachIngredientBtn = ".peachbtn"
var peachingredient = ".peach-ingredient"
animation(peachbottle ,peachIngredientBtn , peachingredient);

var berryhbottle = ".berrybottle"
var berryhIngredientBtn = ".berrybtn"
var berryingredient = ".berry-ingredient"
animation(berryhbottle , berryhIngredientBtn , berryingredient);

var cocunutbottle = ".cocunutbottle"
var coconutIngredientBtn = ".cocunutbtn"
var coconutingredient = ".cocunut-ingredient"
animation(cocunutbottle , coconutIngredientBtn , coconutingredient);


 const a = document.querySelectorAll(".menu");
 console.log(a)
document.querySelector(".menu").addEventListener("click",()=>{
  document.querySelector(".menu-box").classList.toggle("hidden")
 document.querySelector(".hero-section").classList.toggle("opacity-80")
 document.querySelector(".menu").classList.toggle("scale-175")
})
document.querySelector(".hamburger").addEventListener("click",()=>{
  document.querySelector(".hamburger-items").classList.toggle("hidden")
})

