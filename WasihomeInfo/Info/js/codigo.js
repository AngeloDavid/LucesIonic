/**
 * Created by angel on 27/04/2017.
 */
$(document).ready(function(){
    $(".btn").hover(
        function(){
            var thisdiv = jQuery(this).attr("aria-controls");
            thisdiv="#"+thisdiv;
            $(thisdiv).collapse("show");
        },
        function(){
            var thisdiv = jQuery(this).attr("aria-controls");
            thisdiv="#"+thisdiv;
            $(thisdiv).collapse("hide");
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
