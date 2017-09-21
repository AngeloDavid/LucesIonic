window.onload = function(){
    var bsDiv = document.getElementById("puplila");
    var x, y;
    // On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
    window.addEventListener('mousemove', function(event){
        x = event.clientX+100;
        y = event.clientY+100;
        if ( typeof x !== 'undefined' ){
            bsDiv.style.left = x + "px";
            bsDiv.style.top = y + "px";
        }
    }, false);
}
