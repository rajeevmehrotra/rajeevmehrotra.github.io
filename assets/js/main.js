(function() {
  var header = document.querySelector(".navbar");

  if(window.location.hash) {
    header.classList.add("headroom--unpinned");
  }

  // Prevent navbar from hiding if one of the links is clicked
  var navLock = false;

  var headroom = new Headroom(header, {
      tolerance: {
        down : 5,
        up : 10
      },
      offset : 60,
      onUnpin: function() {
        if (navLock) {
          // Don't hide the navbar in certain cases
          $(this.elem).removeClass('headroom--unpinned');
          $(this.elem).addClass('headroom--pinned');
        }
      }
  });
  headroom.init();

  $(document).click(collapseNavbar);
  $(document).scroll(handleScroll);

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Put a lock on navbar hiding
    navLock = true;
    // Store hash
    var hash = this.hash;
    var scrollTo = $(hash).offset() ? $(hash).offset().top : 0;
    $('html, body').animate({
      scrollTop:  scrollTo
    }, 800, function(){
      window.location.hash = hash;
      // Release the lock
      navLock = false;
    });
  });

}());

function collapseNavbar(e) {
  if ($(e.target).is('.navbar') || $('.navbar').find($(e.target)).length > 0){
    return;
  }
  $('.collapse').collapse('hide');
}

function handleScroll(e) {
  collapseNavbar(e);
  var docTop = $(window).scrollTop();
  var docHeight = $(window).height();
  $('section .content').each(function() {
    var elt = $(this);
    if (elt.offset().top < (docTop + docHeight * 3 / 4)) {
      if (!$(elt).parent().hasClass('show-section')) {
        $(elt).parent().addClass('show-section');
      }
    }
  });
}