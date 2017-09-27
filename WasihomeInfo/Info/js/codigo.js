/**
 * Created by angel on 27/04/2017.
 */
console.log("cargado");
$(document).ready(function(){
    console.log("dentro");
    
    $(".celda").hover(
        function(){
            var thisdiv = jQuery(this).attr("aria-controls");
            thisdiv="#"+thisdiv;
            $(thisdiv).removeClass('hidden');
        },
        function(){
            var thisdiv = jQuery(this).attr("aria-controls");
            thisdiv="#"+thisdiv;
            $(thisdiv).addClass('hidden');
        }
    );
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var firstCss ="animated bounceInRight";
    var secondCss="animated bounceInLeft";
    $('#prueba').on('click',function () {
        $('#txt1').addClass(firstCss).one(animationEnd, function() {
            $(this).removeClass(firstCss);
        });
        $('#txt2').addClass(secondCss).one(animationEnd, function() {
                    $(this).removeClass(secondCss );
                });
            })
});
