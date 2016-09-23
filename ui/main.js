/*console.log('Loaded!');
var element = document.getElementById("newVal");
element.innerHTML = "test";

//move the image

var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight()
{
    
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px"
    
}

img.onclick = function()
{
    var interval = setInterval(moveRight,50);
   // console.log('inside');
    //img.style.marginLeft = "100px";
};*/


var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            
            if(request.status === 200)
            {
                var counter = request.responseText;
               
                 var span = document.getElementById('count');
    span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET','http://vandanapl.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
  /*  counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    */
};


var nameInput =document.getElementById('one');
var nameInput = nameInput.value;
var submit = document.getElementById('two');
submit.onclick = function() {
    alert(hi)
    var names =['name11','name22','name33'];
    var list ='';
    for(var i=0; i<names.length;i++){
        list += '<li>' +names[i] + '</li>';
    }
    var ul = document.getElementById('three');
    ul.innerHTML = list;
};
 