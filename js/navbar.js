$(document).ready(() => {
  $(".hamburger").click(() => {
    $(".hamburger").toggleClass("active");
    $("nav").toggleClass("open");
  });
});
