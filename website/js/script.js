

var slide = 1;
showSlides(slide);

function plusSlide(n){
    showSlides(slide += n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("background");
    if(n > slides.length){slide = 1}
    if(n < 1) {slide = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slide-1].style.display = "block"

}


function toggle() {
    var x = document.getElementById("hamburgNav");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }

