const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener("click",()=>{
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});
//Menu when scroll
		$(window).scroll(function(){
			var menu = $('nav');
			if($(this).scrollTop() > menu.height()){
				menu.css({"box-shadow":"rgba(0, 0, 0, 0.1) 0px 4px 12px","background":"#ffffff"});
			}else{
				menu.css({"box-shadow":"none"});
			}
		})