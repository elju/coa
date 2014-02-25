veryDRYFunction = function() {
  $('article .annotation').css({
      top: $('.annotation-one').position().top
  });
};

$(document).ready(veryDRYFunction);

$(window).resize(veryDRYFunction);

$('a[href^="annotation://"]').each(function(i) {
  var $this = $(this);
  var text = $this.text();
                                               ////////////////////////////////////
  var href = $this.attr('href').substring(13); // 13 = length of "annotation://" //
                                               ////////////////////////////////////
  $('
