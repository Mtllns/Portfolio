$(function() {

/* torzo de código SOLO para Bootrstrap 4 */
  $.validator.setDefaults({
    errorClass: 'invalid-feedback',
    highlight: function(element) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function(element) {
      $(element).removeClass('is-invalid');
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

//login-form

$("#login-form").validate({
	rules: {
		"login-email": {
			required: true,
			email: false
		},
		"login-password": {
			required: true,
			minlength: 7
		},
        "repeat-password": {
            equalTo: '#login-password'
    }
	},

	messages: {
		"login-email": {
			required: "Este campo es obligatorio.",
			email: "Por favor, escribe una dirección de correo válida",
		},
		"login-password": {
			required: "Este campo es obligatorio.",
			minlength: "Por favor, no escribas menos de {0} caracteres.",
		},
        "repeat-password": {
            required: "Este campo es obligatorio.",
			minlength: "La contraseña debe ser idéntica a la anterior.",
        }
	}
});


$('#login-form').on('submit', function() {

  if ($('#login-form').valid()) {
    alert("formulario válido");
    //form.submit();
  } else {
      alert("formulario no válido");
  }
 
});


});




