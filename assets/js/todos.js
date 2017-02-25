//вычеркнуть отдельную задачу кликом
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//клик по ’ удал€ет задачу
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//подцепит новую задачу из окна ввода
		var todoText = $(this).val();
		$(this).val("");
		//создаст новый li и ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});