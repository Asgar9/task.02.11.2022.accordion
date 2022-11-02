// const accordion = document.getElementsByClassName("container");
// for (let i = 0; i < accordion.length; i++) {
//  accordion[i].addEventListener("click",function () {
//     this.classList.toggle("active")
//  })
// }
// // console.log(accordion);
$(document).ready(function(){

   for (const tab of $(".container") ) {
      tab.$("click",function () {
          this.classList.toggle("active")
   }
 
 });