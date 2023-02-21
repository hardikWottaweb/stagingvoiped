(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1000);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

// dark mode

const body = document.querySelector('.main-body')

const modeSwitch = body.querySelector(".toggle-switch")
const modeText = body.querySelector(".mode-text");



// Load saved mode from localStorage
if (localStorage.getItem("dark") === "true") {
    body.classList.add("dark");
    modeText.innerText = "Light mode";
  }
  
  modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    // Save current mode to localStorage
    localStorage.setItem("dark", body.classList.contains("dark"));
    
    // Update mode text based on current mode
    if (body.classList.contains("dark")) {
      modeText.innerText = "Light mode";

    } else {
      modeText.innerText = "Dark mode";
    }
  });
  
    
  // Dark mode ends here
  
//   images change on dark mode

// if(body.classList.contains("dark")){
//     document.querySelector('.hero-header').style.background = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEVBFq1KKipdESch7upv4JPk4PqgHjvoR88Z4Bps&s), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEVBFq1KKipdESch7upv4JPk4PqgHjvoR88Z4Bps&s)'
// } else{
//     document.querySelector('.hero-header').style.background = " url(../img/bg-dot.png), url(../img/bg-dot.png), url(../img/bg-round.png), url(../img/bg-tree.png), url(../img/bg-bottom-hero.png);"
// }