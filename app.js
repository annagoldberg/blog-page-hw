
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("less");
  var btnText = document.getElementById("myButton");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more > "; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less < "; 
    moreText.style.display = "inline";
  }
}




// var button = ('readMore');



// button.addEventListener('click', function(){
// 	if()
// }



// For Loop
// for (var i = 0; i < readMore.length; i++){
// 	(function(){
// 		var toggle = $(readMore[i]).find('.toggle');
// 		var para = $(readMore[i]).find('.para');
	
// 		toggle.on('click', function(){
// 			para.slideToggle();
// 		});
// 	})();
// }




// in console log - 
// document.getElementById(eventClick).addEventListener('click'),(toggle){});
