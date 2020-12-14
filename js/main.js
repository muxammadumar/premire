$(document).ready(function () {
  $(".search").click(function () {});

  let owl1 = $(".owl-first").owlCarousel({
    mouseDrag: false,
    loop: true,
    nav: false,
    animateOut: "fadeOut",
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".first-dropdown-toggle").click(function () {
    $(".first-dropdown-menu").toggle();
  });

  $(".first-dropdown-item").on("click", function () {
    $(this).parents(".first-dropdown-menu").toggle();
    $("#dropdownMenuButton > .active").text($(this).text());
  });
  $("#second-dropdown-toggle").click(function () {
    $("#second-dropdown-menu").toggle();
  });
  $(".second-dropdown-item").click(function () {
    $("#second-dropdown-toggle > .text").text($(this).text());
    $(this).parents("#second-dropdown-menu").toggle();
  });
  $(".third-owl-carousel").owlCarousel({
    loop: true,
    navs: false,
    dots: true,
    items: 4,
  });
  owl1.on("changed.owl.carousel", function (event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var name = event.type; // Name of the event, in this example dragged
    var namespace = event.namespace; // Namespace of the event, in this example owl.carousel
    var items = event.item.count; // Number of items
    var item = event.item.index; // Position of the current item
    // Provided by the navigation plugin
    var pages = event.page.count; // Number of pages
    var page = event.page.index; // Position of the current page
    var size = event.page.size; // Number of items per page

    var myPage = page + 1;

    // alert(myPage);
    // alert(item)
    var o = "0";
    $(".current").text(o + myPage);
  });
  $(".all").text("0" + owl1.find(".owl-dot").length);
  owl1.owlCarousel();
  $("#owlFirstNext").click(function () {
    owl1.trigger("next.owl.carousel");
  });
  $("#owlFirstPrev").click(function () {
    owl1.trigger("prev.owl.carousel");
  });
  $(".owl-second").owlCarousel({
    stagePadding: 30,
    loop: true,
    items: 6,
    dots: false,
    navs: false,
    margin: 20,
  });
  var owlTwo = $(".owl-second");
  $("#owlSecondNext").click(function () {
    owlTwo.trigger("next.owl.carousel");
  });
  $("#owlSecondPrev").click(function () {
    owlTwo.trigger("prev.owl.carousel");
  });
  var owlThird = $(".third-owl-carousel");
  $("#diplomaNextBtn").click(function () {
    owlThird.trigger("next.owl.carousel");
  });
  $("#diplomaPrevBtn").click(function () {
    owlThird.trigger("prev.owl.carousel");
  });
  $(".default").click(function () {
    $("#questionsList").toggle();
  });
  $(".questionListItem").click(function () {
    $(".default").find(".text").text($(this).text());
    $("#questionsList").toggle();
  });
  $("#service-region-toggler").click(function () {
    $("#service-region-list").toggle();
  });

  $(".service-region-item").click(function () {
    $("#service-region-label").text($(this).text());
    $("#service-region-list").toggle();
    let lat = parseFloat($(this).attr("data-lat"));
    let long = parseFloat($(this).attr("data-long"));
    initMap(lat, long);
  });
  $("#dealers-region-toggler").click(function () {
    $("#dealers-region-list").toggle();
  });

  $(".dealers-region-item").click(function () {
    $("#dealers-region-label").text($(this).text());
    $("#dealers-region-list").toggle();
    let lat = parseFloat($(this).attr("data-lat"));
    let long = parseFloat($(this).attr("data-long"));
    initMap(lat, long);
  });
  $("#shareDropToggler").click(function () {
    var label = $(".share__dropdown__list");
    if (label.hasClass("animate__fadeInDown")) {
      label.toggle();
      label.classList.animateOut(addClass("animate__fadeOutUp"));
    }
  });
  $(".color__custom").ready(function () {
    let color = $(".color__custom").attr("colorPicker");
    console.log(color);
    $(this).css("background", color);
  });
  let myProductCarousel = $(".product__carousel");
  myProductCarousel.owlCarousel({
    items: 1,
    dots: false,
    loop: true,
  });
  $("#productCarouselTriggerPrev").click(function () {
    myProductCarousel.trigger("prev.owl.carousel");
  });
  $("#productCarouselTriggerNext").click(function () {
    myProductCarousel.trigger("next.owl.carousel");
  });
  let category__carousel = $(".category__carousel");
  category__carousel.owlCarousel({
    dots: false,
    items: 4,
    loop: true,
  })
  $("#categoryCarouselPrev").click(function(){
    category__carousel.trigger("prev.owl.carousel")
  })
  $("#categoryCarouselNext").click(function(){
    category__carousel.trigger("next.owl.carousel")
  })
});
