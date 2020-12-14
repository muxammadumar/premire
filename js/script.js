var app = new Vue({
  el: "#app",
  data: {
    test: "TEST",
    searchBoxIsOpen: false,
    menuBoxIsOpen: false,
  },
  methods: {
    openSearchBox: function (e) {
      this.searchBoxIsOpen = true;
      this.menuBoxIsOpen = false;
      $(".burger").addClass("burger-active");
    },
    openMenuBox: function (e) {
      if (this.searchBoxIsOpen) {
        this.searchBoxIsOpen = false;
      } else {
        this.menuBoxIsOpen = !this.menuBoxIsOpen;
      }
      $(".burger").toggleClass("burger-active");
    },
    closeBoxes: function (e) {},
  },
});
