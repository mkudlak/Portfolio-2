$( document ).ready(function() {
  $('carouselExampleControls').on('click', function() {
    var currentSlideName = $('#design-id');
    var activeSlideNumber = $('div.active').data('number');
    currentSlideName.text(activeSlideNumber);
  });
  console.log('hello')
});
