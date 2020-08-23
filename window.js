window.onresize = resize;
resize();

function resize()
{
    document.getElementById("length").innerHTML = window.innerHeight;
    document.getElementById("width").innerHTML = window.innerWidth;
    
}
