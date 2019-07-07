$(document).ready(function(){
    $("#h1").click(function(){
            location.reload(true);
    });
});

$(document).ready(function(){
    $("#text").css({width : "80%", position : "relative",top: "250px" , left : "10%",padding :"0.5%"});
});
function f1(){

}

var xhr = new XMLHttpRequest();
function f1(){
xhr.open('GET','https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',true);
xhr.send();
xhr.onreadystatechange = function(){ 
    if(this.readyState==4){
    var x = JSON.parse(this.responseText);
   document.body.style.backgroundImage = "url("+x.url+")";
   document.getElementsByClassName("loader")[0].style.display = "none";
    }
};
}

$("input").on("keyup",function(){
        if(event.keyCode == 13){
            var xhr = new XMLHttpRequest();
            var y = document.getElementById("text").value;
            xhr.open('GET','https://images-api.nasa.gov/search?q='+y);
            xhr.send();
            xhr.onreadystatechange = function(){
                if(this.readyState == 4){
                    var x = JSON.parse(this.responseText);
                  
                    var images = x.collection.items;
                    var i =0;
                    images.forEach(function(value,index){
                                var links = value.links;
                                links.forEach(function(value,index){
                                    
                                    document.getElementById("images").innerHTML += '<img class="img.thumbnail i rounded" src='+ value.href +'+></img>';
                                    
                                   
                                });
                    });
                        
                    };
                   
                }

            };
        
});

