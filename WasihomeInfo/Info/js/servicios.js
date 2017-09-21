/**
 * Created by angel on 05/05/2017.
 */
var first=false;
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var title = 'fadeInLeftBig';
var parr = 'fadeInRightBig';
var services='slideInUp';
var  tecnologias=[
    {id:"RV",title:"Realidad Virtual", ver_mas:"<iframe src='https://www.youtube.com/embed/q9JBitEz4C4?ecver=1' frameborder='0' allowfullscreen></iframe>"},
	{id:"FV360",title:"Fotos y videos 360°", ver_mas:"<iframe src='https://www.youtube.com/embed/PxpYiTV43_o?ecver=1' frameborder='0' allowfullscreen></iframe>"},
    {id:"FVA",title:"Fotos y videos Aéreos", ver_mas:"<iframe src='https://www.youtube.com/embed/hyiAPx6ciGE?ecver=1' frameborder='0' allowfullscreen></iframe>"},
    {id:"RA",title:"Realidad Aumentada", ver_mas:"<iframe src='https://www.youtube.com/embed/CoVYHb8uoDM?ecver=1' frameborder='0' allowfullscreen></iframe>"},
   	{id:"MR",title:"Maquetas y Render", ver_mas:"<iframe src='https://www.youtube.com/embed/kDAZRMiYvWg?ecver=1' frameborder='0' allowfullscreen></iframe>"},
    {id:"TV",title:"Tour Virtual", ver_mas:"<iframe src='https://www.youtube.com/embed/-4KYAH9zJu8?ecver=1' frameborder='0' allowfullscreen></iframe>"},
    {id:"DI",title:"Domótica – Inmótica", ver_mas:"<iframe src='https://www.youtube.com/embed/XSCEx60Ckd4?ecver=1' frameborder='0' allowfullscreen></iframe>"},
	{id:"TD",title:"Topografía con Drone", ver_mas:"<iframe  src='https://www.youtube.com/embed/Hi8eDRlCS14?ecver=1' frameborder='0' allowfullscreen></iframe>"},
    {id:"HG",title:"Hologramas", ver_mas:"<iframe src='https://www.youtube.com/embed/01fUobhz8bc?ecver=1' frameborder='0' allowfullscreen></iframe>"}
    ] ;
console.log();
$(window).scroll(function(){
    window_y = $(window).scrollTop(); // VALOR QUE SE HA MOVIDO DEL SCROLL

    scroll_critical = parseInt($("#Home").height()) - 550; // VALOR DE TU DIV

    if (window_y > scroll_critical) { // SI EL SCROLL HA SUPERADO EL ALTO DE TU DIV

        if(!first && $(window).height()<1000){

            $('#Titulo').removeClass('hidden-lg');
            $('#Descripcion').removeClass('hidden-lg');
            $('#Servicios').removeClass('hidden-lg');


            $('#Titulo').addClass("animated "+title).one(animationEnd, function() {
                $(this).removeClass("animated "+title);
            });
            $('#Descripcion').addClass("animated "+parr).one(animationEnd, function() {
                $(this).removeClass("animated "+parr);
            });
            $('#Servicios').addClass("animated "+services).one(animationEnd, function() {
                $(this).removeClass("animated "+services);
            });
        }
        first=true;
    }
});

$('#E_Modal').on('show.bs.modal',function (evt) {
    var boton=$(evt.relatedTarget);
    var id_dato=boton.data('whatever');
    var modal =$(this);
    tecnologias.forEach(function (item) {
        if(item.id==id_dato){
            modal.find('.modal-title').text(item.title);
             modal.find('.modal-body').html(item.ver_mas);      
        }
        //
    });



    
});