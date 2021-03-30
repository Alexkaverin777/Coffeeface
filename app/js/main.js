const btnMenu = document.querySelector(".open-menu-btn"),
  	  $body = document.querySelector("body"),
      scrollLink = document.querySelectorAll(".scroll-link"),
	  menuHeader = document.querySelector(".header-menu");

const openMenuHeader = (e) => {
  e.preventDefault();
  const elem = e.target;
  console.log(elem)
  if (elem.closest(".open-menu-btn")) {
    menuHeader.classList.toggle("active");
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  if (elem.classList.contains("header-menu") || elem.classList.contains("header-menu__link")) {
    menuHeader.classList.remove("active-menu");
  }
};

btnMenu.addEventListener("click", openMenuHeader);
/*
// // Плавная прокрутка к секции
for (let link of scrollLink) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = link.getAttribute("href");
    $body.style.position = "static";

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
*/


// Слайдер
$(document).ready(function () {
	$('.slider-users').slick({
		centerMode: true,
		centerPadding: '22%',
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slider-users-prev"><span></span></button>',
		nextArrow: '<button type="button" class="slider-users-next"><span></span></button>',
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					centerMode: true,
					centerPadding: '18%',

				}
			},			{
				breakpoint: 1200,
				settings: {
					centerMode: true,
					centerPadding: '15%',

				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '20%',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10%',
					slidesToShow: 1
				}
			}
		]
	});

	$('.face-slider').slick({
		slidesToShow: 6,
		centerPadding: '0',
		touchMove: true,
		slidesToScroll: 3,
		prevArrow: '<button type="button" class="face-sliders-prev"></button>',
		nextArrow: '<button type="button" class="face-slider-next"></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 4
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 2
				}
			}
		]
	});



});

