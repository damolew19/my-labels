
//set the index
 let slideIndex = 1;

 //next/prev controls
 function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 5000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 5000);
  }
}

//thumbnail image controls
 function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 5000);
  showSlides(slideIndex = n);
 }


function showSlides(n) {
  const getSlides = document.querySelectorAll('.slides');
  const getDots = document.querySelectorAll('.dots');
  if (n > getSlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = getSlides.length;
  }
  for (let i=0; i<getSlides.length; i++) {
    getSlides[i].style.display ='none';
  }
  for (i=0; i <getDots.length; i++) {
    getDots[i].className = getDots[i].className.replace(' active', '');
  }
  getSlides[slideIndex - 1].style.display = 'block';
  getDots[slideIndex - 1].className += ' active';
}

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 5000);
})
