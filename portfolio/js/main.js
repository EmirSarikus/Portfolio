//navbar toggle
$(function () {
  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
    } else {
      $(".item").addClass("active");
    }
  });
});

//scroll down to about section

$(document).ready(function () {
  $(".btn-readmore").click(function () {
    $("html").animate(
      {
        scrollTop: $(".about").offset().top,
      },
      800 //speed
    );
  });
});

//pre-loader
$(window).on("load", function () {
  $(".loader-container").fadeOut(1000);
});
