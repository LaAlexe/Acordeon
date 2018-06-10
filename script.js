
   document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var headers=document.querySelectorAll('.text');
    /*console.log(headers);*/
    var list=document.querySelectorAll('p');
    console.log(list);

    for (var i=0; i<headers.length; i++){
 
    	/*console.log(headers[i]);*/

    	let header=headers[i];


       header.addEventListener("click", function(e){
       	/*console.log(header.parentElement);*/
       	var li=header.parentElement;

       	var content = li.querySelector('p');
       	console.log(content);
       	
       for(var j=0; j<list.length; j++){
       	list[j].classList.remove('visible');


}
       	content.classList.add("visible");





       });

    	}
   });
