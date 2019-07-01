$(document).ready(function(){
    $("#h1").click(function(){
            location.reload(true);
    });
});

$(document).ready(function(){
    $("#text").css({width : "80%", position : "relative",top: "250px" , left : "10%",padding :"0.5%"});
});
/*
var xhr = new XMLHttpRequest();
xhr.open('GET','https://api.nasa.gov/planetary/apod?api_key=“Photo of the Day”');
xhr.send();
xhr.onreadystatechange = function(){
    console.log(this.responseText);
    
};
*/
$(window).ready(function(){
    
            $(".loader").hide();
 
});
/*
var xhr = new XMLHttpRequest();
xhr.open('GET','https://api.nasa.gov/planetary/apod?api_key=“Photo of the Day”');
xhr.send();
xhr.onreadystatechange = function(){
    console.log(this.responseText);
    
};
*/