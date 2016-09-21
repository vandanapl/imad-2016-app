console.log('Loaded!');
var element = document.getElementById("newVal");
element.innerHTML = "test";

//move the image

var img = document.getElementById("madi");
img.onclick = function()
{
    console.log('inside');
    img.style.marginLeft = "100px";
};
