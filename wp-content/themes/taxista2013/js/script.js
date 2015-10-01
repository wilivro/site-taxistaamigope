$(function(){
	$("#hitAdmin").click(function(){
		$("#loginAdmin").css("z-index",2);
		$("#loginUsuario").css("z-index",1);
	});
	$("#hitUsuario").click(function(){
		$("#loginAdmin").css("z-index",1);
		$("#loginUsuario").css("z-index",2);
	});
	$("#carrossel").carouFredSel({
	    circular: true,
	    infinite: false,
	    auto    : false,
	    prev    : {
	        button  : "#prev",
	        key     : "left"
	    },
	    next    : {
	        button  : "#next",
	        key     : "right"
	    },
	});


});