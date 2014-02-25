veryDRYFunction = function($span, $annotation) {
  $annotation.css({
      top: $span.position().top
  });
};

veryDRYWrapper = function() {
  $('.article-annotation').each(function() {
    var $this = $(this);
    veryDRYFunction($this, $this.next());
  });
};

$(document).ready(veryDRYWrapper);

$(window).resize(veryDRYWrapper);

$('a[href^="annotation://"]').each(function(i) {
  var $this = $(this);
  var text = $this.text();
                                                           ////////////////////////////////////
  var annotation_text = $this.attr('href').substring(13); // 13 = length of "annotation://" //
                                                         ////////////////////////////////////
  var $span = $('<span class="article-annotation">').text(text).tooltip({
    title: annotation_text
  });
  var $annotation = $('<span class="annotation">').text(annotation_text);

  $span.insertBefore($this);
  $annotation.insertAfter($this);
  $this.remove();
  veryDRYFunction($span, $annotation);
});
