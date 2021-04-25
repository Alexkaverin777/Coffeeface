const btnMenuOpen = document.querySelector(".open-menu-btn"),
	$body = document.querySelector("body"),
	scrollLink = document.querySelectorAll(".scroll-link"),
	menuHeader = document.querySelector(".header-menu"),
	headerMenuActive = document.querySelector('.menu-header-wrapper');


// Открытие меню
const openMenuHeader = (e) => {
	e.preventDefault();
	const elem = e.target;
	if (elem.closest(".open-menu-btn")) {
		menuHeader.classList.toggle("menu-active");
	}
	if (elem.closest('.header-menu')) {
		menuHeader.classList.remove("menu-active");
	}
};
headerMenuActive.addEventListener("click", openMenuHeader);

// Плавная прокрутка к секции
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
			}, {
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
				breakpoint: 576,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: false,
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
				breakpoint: 992,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToScroll: 1,
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	$('.blog-slider').slick({
		slidesToShow: 3,
		touchMove: true,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					infinite: false,
					slidesToShow: 2.3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1.3,
					infinite: false,

				}
			},
		]
	})


});

