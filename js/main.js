let span = document.querySelector("#btn");


// window.onscroll = function(){
//   if( scrollY >= 1000){
//     span.classList.add("show");
//   }else{
//     span.classList.remove("show");
//   }
// }

// window.onclick = function(){
//   window.scrollTo({
//     top:0,
//     behavior:"smooth",
//   });
// }



window.addEventListener("scroll" , clickTo)

function clickTo(){
  if( window.scrollY >= 1100){
    span.classList.add("show")
  }else{
    span.classList.remove("show")
  }
}

span.addEventListener("click" , () => {
  window.scrollTo({
    top:0 ,
    behavior:"smooth"
  })
})