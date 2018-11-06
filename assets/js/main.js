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

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Store hash
    var hash = this.hash;
    var scrollTo = $(hash).offset() ? $(hash).offset().top : 0;
    $('html, body').animate({
      scrollTop:  scrollTo
    }, 800, function(){

      window.location.hash = hash;
    });
  });

}());

function collapseNavbar(e) {
  if ($(e.target).is('.navbar') || $('.navbar').find($(e.target)).length > 0){
    return;
  }
  $('.collapse').collapse('hide');
}