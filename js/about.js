$(document).ready(function () {
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height >= 2500) {
      $(".get-started .wrapper").addClass("visible");
    }
  });
});
