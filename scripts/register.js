   $(function() {
   $("#register-form").validate({
			rules: {
				"usr": {
				    required:true,
					minlength: 6,
					maxlength: 15
				},
                "fullname": {
				    required:true,
                    minlength: 3,
					maxlength: 30,
				},
				"pass": {
				    required:true,
					minlength: 6,
					passDigitRule: true
				},
				"cpass": {
				   required:true,
				   equalTo: "#password"
				},
				"email":{
				    required:true,
					email: false,
					emailRegex: true
				}},
				 messages: {
		"usr": {
        required: "Моля, въведете username!",
        minlength: " Tрябва да има поне шест символа!",
		maxlength:"Не трябва да съдържа повече от 15 символа!"
      },		 
      "fullname":{
        required: "Моля, въведете име и фамилия!",
        minlength: " Tрябва да има поне три символа!",
		maxlength:"Името ви не може да съдържа повече от 30 символа!"
      },		 
     "pass": {
        required: "Моля, въведете парола!",
        minlength: "Паролата ви трябва да има поне шест символа!",
		
      },
     "cpass":{
        required: "Моля, повторете паролата!",
        minlength: "Паролата ви трябва да има поне шест символа!"
      },
	  "email": {
	  required: "Моля,въведете валиден email адрес!"
    }},
	
	success: function(label) {
    label.text("Коректно попълване!");
    },
     submitHandler: function(form) {
$('#submit').click(function()
	 {
 if($("#register-form").valid()==true){
 
$("#register-form").css('display','none');
$("#register").append('<p class="success">Вие се регистрирахте успешно! Благодарим ви!</p>');
}


}); 
}           
        
});

    
         jQuery.validator.addMethod("emailRegex", function(value, element) {
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(value);
		}, "Въведете валиден email адрес!");
		jQuery.validator.addMethod("passDigitRule", function(value, element) {
			for (var i = 0; i < value.length; i++) {
				var currentSymbolCode = value[i].charCodeAt();
				var isDigit = (48 <= currentSymbolCode && currentSymbolCode <= 57);
				if(isDigit) {
					return true;
				}
			}
			return false;
		}, "Въведете поне една цифра!");
   })