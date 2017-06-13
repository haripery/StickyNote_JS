/**
 * Created by hari on 6/12/17.
 */
//GLOBALVARIABLES
var sticyColor= "yellow";
var notesNumber = null;
console.log("hai");

//Delete notes
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Selecting Colors
$("button").click(function(event){

    if (this.id==="cyan") {
        sticyColor= "cyan";
        console.log(sticyColor);
        $("input").css("background-color", "rgb(0,255,255)");
    }
    else if (this.id==="orange") {
        sticyColor= "orange";
        $("input").css("background-color", "orange");
        console.log(sticyColor);
    }
    else if (this.id==="pink") {
        sticyColor= "pink";
        $("input").css("background-color", "pink");
        console.log(sticyColor);
    }
    else if(this.id==="yellow"){
        sticyColor= "yellow";
        console.log(sticyColor);
    }
    console.log(sticyColor);

})

//Adding Notes
$(".fa-plus").click(function(){
    var newSticky = $("input[type='text']").val();
		$(this).val("");
		notesNumber+=1
        console.log(notesNumber);
		console.log(sticyColor);
         //create a new li and add to ul
		$("ul").append("<li id="+notesNumber+"><span><i class='fa fa-trash-o'></i></span> " + newSticky +"  "+"</li>");
        console.log($("li"));
        $("#"+notesNumber).css("background-color",sticyColor);
        $("#sticky").val("");
        $("#sticky").css("background-color", "yellow");
        sticyColor="yellow"

});
