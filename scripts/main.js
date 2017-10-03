
function slideSwitch() {
    var $active = $('.slide IMG.active');

    if ( $active.length == 0 ) $active = $('.slide IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('.slide IMG:first');

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
	
}

$(function() {
      setInterval( "slideSwitch()", 8000 );
      });	

$(function(){$("#contact-form").validate({
			rules: {
				"email": {
					required:true,
					email: false,
					emailRegex: true
				}
			},
		        
		});
		jQuery.validator.addMethod("emailRegex", function(value, element) {
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(value);
		}, "Wrong email!");
		$("#contact-form").on("submit",function(e){
			e.preventDefault();
			e.stopPropagation();
			if($(this).valid()) {
             var email = this.email.value;
             var li = $("<li>").text(email);
             $("#test").append(li);
            this.email.value = "";
        }
			//var name =$("#email").val();
//$("#test").append(name+","+" ") ;
		 // if($("#contact-form").valid()) {
//name = name.replace("<", "&lt;");
//name = name.replace(">", "&gt;");
					// send form
//var formData = {
						//name: name,

//}
//}
   
}); 
});
  $(function(){

    $('.navbar-nav li').click(function(){ 
      $(this).addClass('active').siblings().removeClass('active');
    }); 
  }) 