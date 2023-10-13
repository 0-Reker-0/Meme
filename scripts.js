/*document.getElementById('login').onclick = function(){
	document.getElementById('entrance').innerHTML = '';
}*/
$(document).ready(function() {
	$("#login").click(function() {
		$("#main").html('<div id = "login_form">'+
		'<h1>Войти</h1>'+
		'<form action = "login.php" method = "POST">'+
			'<p><input type = "text" name = "username" class = "text" required placeholder = "Введите логин"></p>'+
			'<p><input type = "text" name = "password" class = "text" required placeholder = "Введите пароль"></p>'+
			'<p><input type = "text" name = "code-word" class = "text" required placeholder = "Введите код-слово"></p>'+
			'<p></p><input type = "submit" name = "submit" class = "button" id = "subm_logn" value = "Войти"></p>'+
		'</form>'+
	'</div>');
	});
	$("#registr").click(function() {
		$("#main").html('');
	});
});
//lol idi na huy))))
//timlid pidor!