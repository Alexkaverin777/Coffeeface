// const btnMenu = document.querySelector(".open-menu-btn"),
//   $body = document.querySelector("body"),
//   scrollLink = document.querySelectorAll(".scroll-link"),
//   menuHeader = document.querySelector(".menu");
//
// const openMenuHeader = (e) => {
//   e.preventDefault();
//   const elem = e.target;
//   console.log(elem);
//   if (elem.closest(".open-menu-btn")) {
//     menuHeader.classList.toggle("active-menu");
//     document.documentElement.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   }
//   if (
//     elem.classList.contains("menu") ||
//     elem.classList.contains("menu__link")
//   ) {
//     menuHeader.classList.remove("active-menu");
//   }
// };
// menuHeader.addEventListener("click", openMenuHeader);
// // Плавная прокрутка к секции
// for (let link of scrollLink) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const blockID = link.getAttribute("href");
//     $body.style.position = "static";
//
//     document.querySelector(blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// }
