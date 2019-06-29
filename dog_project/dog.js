var xhr = new XMLHttpRequest();
function reload(){
   
    document.location.reload();
}
function getPictures(id){
    
    xhr.open('GET','https://dog.ceo/api/breeds/image/random',true);
    xhr.send();
    xhr.onreadystatechange =  function() {
        if (this.readyState == 4) {
            var x = JSON.parse(this.responseText);
            document.getElementById("text").style.display = "none";
           document.getElementById("image").src  = x.message;
       }
    };
}