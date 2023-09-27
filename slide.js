
let slideIndex = 1;
showSlides(slideIndex, "mySlides-01");
showSlides(slideIndex, "mySlides-02");
showSlides(slideIndex, "mySlides-03");
showSlides(slideIndex, "mySlides-04");
showSlides(slideIndex, "mySlides-05");
// showSlides02(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n), "mySlides-01");
  showSlides((slideIndex += n), "mySlides-02");
  showSlides((slideIndex += n), "mySlides-03");
  showSlides((slideIndex += n), "mySlides-04");
  showSlides((slideIndex += n), "mySlides-05");
  // showSlides01((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n), "mySlides-01");
  showSlides((slideIndex = n), "mySlides-02");
  showSlides((slideIndex = n), "mySlides-03");
  showSlides((slideIndex = n), "mySlides-04");
  showSlides((slideIndex = n), "mySlides-05");
  // showSlides01((slideIndex = n));
}

function showSlides(n, slidesClassName) {
  let i;
  let slides = document.getElementsByClassName(slidesClassName);
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  console.log(slides[slideIndex - 1]);
  dots[slideIndex - 1].className += " active";
}
// function showSlides01(n){
//   let i;
//   let slides = document.getElementsByClassName("mySlides-01");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
