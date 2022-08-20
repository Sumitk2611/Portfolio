$(document).ready(function () {
  //menu
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".olympic-k").click(function () {
    window.location.href = "https://olympic-k.web.app";
  });

  $(".student-vote").click(function () {
    window.location.href = "https://github.com/mingli6809/2800-202210-BBY04";
  });

  $(window).scroll(function () {
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
});
