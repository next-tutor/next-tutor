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

  // $(window).scroll(function () {
  //   var height = $(window).scrollTop();

  //   if (height >= 1060) {
  //     $(".third-page .section1").addClass("visible");
  //     if (height >= 1550) {
  //       $(".third-page .section2").addClass("visible");
  //       if (height >= 2050) {
  //         $(".third-page .section3").addClass("visible");
  //         if (height >= 3500) {
  //           $(".get-started .wrapper").addClass("visible");
  //         }
  //       }
  //     }
  //   }
  // });

  $(".second-page .slider .btns .btn.1").click(() => {
    if ($(".slider .item.first").hasClass("active")) {
      $(".slider .item.third").removeClass("right").addClass("left");
      $(".slider .item.second").removeClass("left").addClass("active");
      $(".slider .item.first").removeClass("active").addClass("right");
    } else if ($(".slider .item.second").hasClass("active")) {
      $(".slider .item.first").removeClass("right").addClass("left");
      $(".slider .item.third").removeClass("left").addClass("active");
      $(".slider .item.second").removeClass("active").addClass("right");
    } else if ($(".slider .item.third").hasClass("active")) {
      $(".slider .item.second").removeClass("right").addClass("left");
      $(".slider .item.first").removeClass("left").addClass("active");
      $(".slider .item.third").removeClass("active").addClass("right");
    }
  });

  $(".second-page .slider .btns .btn.2").click(() => {
    if ($(".slider .item.first").hasClass("active")) {
      $(".slider .item.first").removeClass("active").addClass("left");
      $(".slider .item.third").removeClass("right").addClass("active");
      $(".slider .item.second").removeClass("left").addClass("right");
    } else if ($(".slider .item.third").hasClass("active")) {
      $(".slider .item.third").removeClass("active").addClass("left");
      $(".slider .item.second").removeClass("right").addClass("active");
      $(".slider .item.first").removeClass("left").addClass("right");
    } else if ($(".slider .item.second").hasClass("active")) {
      $(".slider .item.second").removeClass("active").addClass("left");
      $(".slider .item.first").removeClass("right").addClass("active");
      $(".slider .item.third").removeClass("left").addClass("right");
    }
  });

  $(document).on("click", ".slider .item.left", function () {
    $(".slider .item.right").removeClass("right").addClass("left");
    $(".slider .item.active").removeClass("active").addClass("right");
    $(this).removeClass("left").addClass("active");
  });
  $(document).on("click", ".slider .item.right", function () {
    $(".slider .item.left").removeClass("left").addClass("right");
    $(".slider .item.active").removeClass("active").addClass("left");
    $(this).removeClass("right").addClass("active");
  });
});

// window.onbeforeunload = function () {

// }

setTimeout(function () {
  console.log("33333344443");
  window.scrollTo({ top: 0, behavior: 'smooth' });
},2);