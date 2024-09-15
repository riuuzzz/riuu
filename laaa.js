$('.scroll-animate').each(function() {
var $this = $(this);
var offset = $this.offset().top;
var windowHeight = $(window).height();
$(window).scroll(function() {
if ($(window).scrollTop() + windowHeight > offset) {
$this.addClass('animate');
}
});
});