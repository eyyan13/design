let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.transform = "translateX(-" + (slideIndex-1) * 100 + "%)";
  }
}

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

$(document).ready(function() {
  $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      e.stopPropagation();
  });

  $('html').click(function(){
      $('.nav-dropdown').hide();
  })
  $('#nav-toggle').click(function(){
      $('nav ul').slideToggle();
  })
  $('#nav-toggle').on('click', function(){
      this.classList.toggle('active');
  });
});

function expandPicture(card) {
  var imgSrc = card.querySelector('img').src;
  var expandedImg = document.querySelector('.expanded-picture');
  expandedImg.src = imgSrc;
  
  document.querySelector('.overlay').style.display = 'block';
  document.querySelector('.expanded-picture-container').style.display = 'block';
}

function closePicture() {
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.expanded-picture-container').style.display = 'none';
}

  
