
///service worker/////


if('serviceWorker' in navigator){
console.log('Puedes usar los serviceWorker en tu navegador');
navigator.serviceWorker.register('./sw.js')
                         .then(res => console.log('serviceWorker cargados correctamente', res))
                         .catch(err => console.log('serviceWorker no es ha podido registrar', err));
}
else{

	console.log('No puedes usar los serviceWoorker en tu navegador');

}
///scroll suavizado////


$(document).ready(function(){

	$("#menu a").click(function(e){ 
		e.preventDefault();

		/*console.log($("footer").offset().top);*/
        
        $("html, body").animate({

        	scrollTop: $($(this).attr('href')).offset().top

        });


		return false;

	});


});