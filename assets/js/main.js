(function() {
  var header = document.querySelector(".navbar");

  if(window.location.hash) {
    header.classList.add("headroom--unpinned");
  }

  var headroom = new Headroom(header, {
      tolerance: {
        down : 5,
        up : 10
      },
      offset : 60
  });
  headroom.init();

  $(document).click(collapseNavbar);
  $(document).scroll(collapseNavbar);

}());

function collapseNavbar(e) {
  if ($(e.target).is('.navbar') || $('.navbar').find($(e.target)).length > 0){
    return;
  }
  $('.collapse').collapse('hide');
}