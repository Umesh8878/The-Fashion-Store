let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let prev = document.getElementById('prev')
let next = document.getElementById('next')
let track  =document.querySelector('.track')
let carousalWidth= document.querySelector('.carousal-container').offsetWidth;

next.addEventListener('click', ()=>{
console.log('work')
  track.style.transform = `translateX(-${carousalWidth}px)`
})
prev.addEventListener('click', ()=>{

track.style.transform = `translateX(-${0}px)`
})

let prev1 = document.getElementById('prev1')
let next1 = document.getElementById('next1')
let track1  =document.querySelector('.track1')
let carousalWidth1= document.querySelector('.carousal-container1').offsetWidth;

next1.addEventListener('click', ()=>{
console.log('work')
  track1.style.transform = `translateX(-${carousalWidth1}px)`
})
prev1.addEventListener('click', ()=>{

track1.style.transform = `translateX(-${0}px)`
})