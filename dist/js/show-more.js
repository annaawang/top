function showMore() {
	var text = $('#see-more-scenarios').text();
    $('#see-more-scenarios').hide();
	$( ".hidden" ).toggle();
 	$.scrollify.update();
 }

$(document).ready(function(){
$( ".read-more-trigger" ).click(function() {
	console.log("hello");
 	$.scrollify.update();
 })
});
