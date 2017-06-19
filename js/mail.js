$(document).ready(function() {

	$("#form_modal").submit(function() {
		$.ajax({
			type: "POST",
			url: "..//mail_call.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_modal").trigger("reset");
		});
		return false;
	});


	$("#form_window").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_window").trigger("reset");
		});
		return false;
	});

});