$(document).ready(function () {
	$("#form-login input").focusin(function () {
		$(this).css({
			"background-color": "lightpink",
			"font-size":"20px"
		})
	});
	$("#form-login input").focusout(function () {
		$(this).css({
			"background-color": "white",
			"font-size":"16px"
		})
	});
})