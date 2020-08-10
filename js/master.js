$(document).ready(function() {
  $(".menu-toggler").on("click", function() {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function() {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });
});





// select skills selector
let ourSkills = document.querySelector(".skills");
mybutton = document.getElementById("myBtn");
scrollOnMenu = document.getElementById("top-nav");

function allSkills() {
  let skillsOffsetTop = ourSkills.offsetTop;

  let skillsOuterHeight = ourSkills.offsetHeight;

  let windowHeight = this.innerHeight;

  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box  .skill-progress span"
    );

    allSkills.forEach(skill => {
      skill.style.width = skill.dataset.progress;
    });
  }
}

function topBtnFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollMenuFunction() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".menu-toggler").removeClass("open"); 
    $(".top-nav").removeClass("open");
  }
}

window.onscroll = function() {
  allSkills();
  topBtnFunction();
  scrollMenuFunction();
};



