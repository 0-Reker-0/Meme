$(document).ready(function() {
	$("#login").click(function() {
		$("#main").css("display", "none");
		$("#login_form, #navigation").css("display", "block")
	});
	$("#registr, #registr_frm_logn").click(function() {
		$("#main, #login_form").css("display", "none");
		$("#reg_form, #navigation").css("display", "block")
	});
	$("#email_enter").click(function() {
		$("#login_form").css("display", "none");
		$("#email_form, #navigation").css("display", "block")
	});
	$("#back").click(function() {
		$("#reg_form, #login_form, #email_form, #navigation").css("display", "none");
		$("#main").css("display", "block")
	});
});