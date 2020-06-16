// проверка браузера на поддержку Webp формата
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

// spoiler
$(document).ready(function(){
    $('.spoiler').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(500);
    });
    
});

//cars switching
$(document).ready(function() {
	$("#cars__controls").on('mouseover', 'li', function() {
	  $("#cars .model-number__car").removeClass("car__active");
	  var newImage = $(this).index();
  
	  $("#cars .model-number__car").eq(newImage).addClass("car__active");
  
	  $("#cars__controls li").removeClass("item__link_active");
      $(this).addClass("item__link_active");
    });
    document.addEventListener('mouseover', (event) => {
        const target = event.target;
        if((target.closest('.model-number__car')) || (target.classList.contains('model-number__link'))){
            console.log('target: ', target);
        }else{
            $("#cars .model-number__car").removeClass("car__active");    
            $("#cars__controls li").removeClass("item__link_active");
        }
    });
  });

