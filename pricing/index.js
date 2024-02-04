$(document).ready(function () {
  $(window).scroll(() => {
    var height = $(window).scrollTop();
    console.log(height);
    if (height >= 1300) {
      $(".get-started .wrapper").addClass("visible");
    }
  });

  $(".item").click(function () {
    $(this).siblings().removeClass("active").children(".content").slideUp();
    $(this).toggleClass("active").children(".content").slideToggle();
  });
});
