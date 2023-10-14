$(document).ready(function() {
	var errors = [];
	var pas1 = $("[name='password_1']");
	var pas2 = $("[name='password_2']");
	//
	$("#login").click(function() {
		$("#main").css("display", "none");
		$("#login_form, #navigation").css("display", "block");
	});
	$("#registr, #registr_frm_logn").click(function() {
		$("#main, #login_form").css("display", "none");
		$("#reg_form, #navigation").css("display", "block");
	});
	$("#email_enter").click(function() {
		$("#login_form").css("display", "none");
		$("#email_form, #navigation").css("display", "block");
	});
	$("#back").click(function() {
		$("#reg_form, #login_form, #email_form, #navigation").css("display", "none");
		$("#main").css("display", "block");
	});
	//
	$('#submit_reg').click(function(){
		if (pas1.val() !== pas2.val()){
			errors.push("Пароли не совпадают!");
		}
		if (errors.length != 0){
			const last = errors.pop();
			$("#errors").text("Ошибке "+ last);
			console.log(errors);
			console.log(pas1.val());
			console.log(pas2.val());
		}
		else{
			$("#errors").text("")
		}
	});
});