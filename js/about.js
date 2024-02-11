$(document).ready(function () {
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    console.log(height);
    if (height >= 2500) {
      $(".get-started .wrapper").addClass("visible");
    }
  });
});
