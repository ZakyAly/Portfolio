$(document).ready(function() {
  $(".menu-toggler").on("click", function() {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function() {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  // $('nav a[href*="#"]').on("click", function() {
  //   $("html, body").animate(
  //     Keyframe,
  //     {
  //       scrollTop: $($(this).attr("href")).offset().top - 100
  //     },
  //     options,
  //     2000
  //   );
  // });
});




{{{{{{{{{{{{{{// select skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function allSkills() {
  // skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;

  // skills outer height
    let skillsOuterHeight = ourSkills.offsetHeight;

  // window Height
    let windowHeight = this.innerHeight;

  // window scrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
        ".skill-box  .skill-progress span"
    );

    allSkills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
    });
    //this.console.log('skills section reached');
    }
};


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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



/////////final///////
// select skills selector
let ourSkills = document.querySelector(".skills");
mybutton = document.getElementById("myBtn");

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
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

window.onscroll = function(){
    allSkills();
    scrollFunction();
}
}}}}}}}}}}}}}}}}}}}}}}}}}}}