var responsiveMode = 0;

$(document).ready(function () {
  $(".responsive-menu div").click(() => {
    debugger;
    if (responsiveMode == 0) {
      responsiveMode = 1;
      $(".responsive-menu .item1").removeClass("checked");
      $(".responsive-menu .item2").addClass("checked");
    } else {
      responsiveMode = 0;
      $(".responsive-menu .item2").removeClass("checked");
      $(".responsive-menu .item1").addClass("checked");
    }
  });

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    console.log(height);
    if (height >= 1060) {
      $(".third-page .section1").addClass("visible");
      if (height >= 1550) {
        $(".third-page .section2").addClass("visible");
        if (height >= 2050) {
          $(".third-page .section3").addClass("visible");
          if (height >= 3500) {
            $(".get-started .wrapper").addClass("visible");
          }
        }
      }
    }
  });
});
