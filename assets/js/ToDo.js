$("ul").on("click", "li", function(){
	$(this).toggleClass("selected");
});

$("input").on("keypress", function(ev){
	
     var text = $("input").val();

	if(ev.which === 13){
		$("ul").append("<li><span><i class='material-icons'>&#xe872;</i> </span>" + text + "</li>");
	    

	    $("input").val("");
	}
	
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(300, function(){
		$(this).remove();
	})
	event.stopPropagation();
}); 

$("#rucka").on("click", function(){
	$("input").fadeToggle();
});

