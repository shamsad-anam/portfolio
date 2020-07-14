// active class change on click
// const navAll = document.querySelectorAll(".nav .nav__item");

// $navAll.forEach((nav) => {
//   nav.addEventListener("click", () => {
//     document
//       .querySelectorAll(".nav")
//       .find(".active")
//       .classList.remove("active");
//     document.querySelector(this).classListRemove("active");
//     console.log(this);
//   });
// });

// $(".mynav .mynav__item").on("click", function () {
//   $(".mynav").find(".active").removeClass("active");
//   $(this).addClass("active");
// });

//copyright year
document.getElementById("year").innerHTML = new Date().getFullYear();

const show = document.querySelectorAll(".btn.showcase__item-links--gallery");
for (let i = 0; i < show.length; i++) {
  show[i].addEventListener("click", (e) => {
    console.log(`clicked ${i}`);
  });
}
