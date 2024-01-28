$(document).ready(function () {
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    var timelineHeight = $(".timeline").position().top;
    const screenBottom = height + window.innerHeight;
    const newHeight = screenBottom - timelineHeight - 200;
    $(".timeline .line-wrapper .line").css("height", `${newHeight}px`);
    checkDot(newHeight, 1, () => {
      checkDot(
        newHeight,
        2,
        checkDot(newHeight, 3, () =>
          checkDot(newHeight, 4, () => checkDot(newHeight, 5, () => {}))
        )
      );
    });
  });
});

function checkDot(newHeight, index, cb) {
  if (index == 1) {
    if (newHeight >= 200) {
      $("#dot" + index).addClass("visible");
      $("#date" + index).addClass("visible");
      $(`#content${index} .content`).addClass("visible");
      cb();
    } else {
      $("#dot" + index).removeClass("visible");
      $("#date" + index).removeClass("visible");
      $(`#content${index} .content`).removeClass("visible");
    }
  } else {
    if (newHeight >= 240 + (index - 1) * 257) {
      $("#dot" + index).addClass("visible");
      $("#date" + index).addClass("visible");
      $(`#content${index} .content`).addClass("visible");
      cb();
    } else {
      $(".timeline .line-wrapper #dot" + index).removeClass("visible");
      $(".timeline .dates #date" + index).removeClass("visible");
      $(`.timeline .content-wrapper #content${index} .content`).removeClass(
        "visible"
      );
    }
  }
}
