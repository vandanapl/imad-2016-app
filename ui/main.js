console.log('Loaded!');
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
};
