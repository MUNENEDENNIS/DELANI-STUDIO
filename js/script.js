$(document).ready(function () {
    $("#design-image").click(function () {
        $("#design-image").slideDown('1500').hide('1000');
        $("#design").show('1500');
    });
    $("#design").click(function () {
        $("#design").slideUp('2000');
        $("#design-image").slideDown('2000');
    });
    $("#development-image").click(function () {
        $("#development-image").slideDown('2000').hide('1500');
        $("#development").show('2000');
    });
    $("#development").click(function () {
        $("#development").slideUp('2000');
        $("#development-image").slideDown('2000');
    });
    $("#product-image").click(function () {
        $("#product-image").slideDown('2000').hide('1500');
        $("#product").show('2000');
    });
    $("#product").click(function () {
        $("#product").slideUp('2000');
        $("#product-image").slideDown('2000');
    });
});
$(document).ready(function () {

	 $("#project1").mouseover(function () {
	 $("#hover1").show();
	 }).mouseout(function () {
	 $("#hover1").hide();
	 });

	 $("#project2").mouseover(function () {
	 $("#hover2").show();
	 }).mouseout(function () {
	 $("#hover2").hide();
	 });

	 $("#project3").mouseover(function () {
	 $("#hover3").show();
	 }).mouseout(function () {
	 $("#hover3").hide();
	 });
