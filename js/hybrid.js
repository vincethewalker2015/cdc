$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('#transparent').css('color','white');
} else {
$('#transparent').css('color','transparent');
}
});