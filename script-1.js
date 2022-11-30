
var modal = document.querySelector(".modal");
var img = document.querySelectorAll(".picture");
var modalImg = document.querySelector(".modalContent");
var captionText = document.querySelectorAll(".caption");

// img.onclick = function() {
// 	modal.style.display = "block";
// 	modalImg.src = this.src;
// 	captionText.innerHTML = this.alt;

// };



img.forEach((item) => {
  item.addEventListener("click", (event) => {
    modal.style.display = "block";
    modalImg.src = item.src;
    captionText.innerHTML = item.alt;
  });
});

// for (var i = 0; i < img.length; i++) {
//   var thisImg = img[i];
//   thisImg.addEventListener("click", function(){
//     var modal = document.getElementById(this.id);
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }, false);}