// var features = [];

// const debounce = (callback, wait) => {
//   let timeoutId = null;
//   return (...args) => {
//     window.clearTimeout(timeoutId);
//     timeoutId = window.setTimeout(() => {
//       callback.apply(null, args);
//     }, wait);
//   };
// }

// const onscroll = debounce((ev) => {

//   let name;
//   let holder = document.querySelectorAll(".side img.active")[0];
//   let holderBounds = holder.getBoundingClientRect();

//   features.forEach((feature) => {
//     var bounds = feature.getBoundingClientRect();

//     if (bounds.top > holderBounds.top - 50 && bounds.bottom < (holderBounds.top + holderBounds.height + 50)) {
//       name = feature.dataset.name;

//       $(".side img").removeClass("active");
//       $(".side").find("." + name).addClass("active");

//       $(".platform .feature").removeClass("active");
//       $(`.platform .feature[data-name="${name}"]`).addClass("active");
//     }
//   });

//   if (name === undefined) {
//     $(".side img").removeClass("active");
//     $(".side").find(".feature0").addClass("active");
//     $(".platform .feature").removeClass("active");
//   }
// }, 0);

// $(document).ready(function () {
//   features = document.querySelectorAll(".platform .feature");
//   $(window).scroll(onscroll);
// })