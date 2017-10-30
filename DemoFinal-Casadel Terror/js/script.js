jQuery(function($){
    var estado=true;


    //Informacion del Websocket
    var ipWs= 'localhost';
    var ptWs='8080';

    // Websocket
    var websocket_server = new WebSocket("ws://"+ipWs+":"+ptWs+"/");
    websocket_server.onopen = function(e) {
        websocket_server.send(
            JSON.stringify(3)
        );
    };
    websocket_server.onerror = function(e) {
        console.log('Error',e.data);
        var msg='<div class="alert alert-warning alert-dismissible fade show" role="alert">';
        msg+='<strong>Error!</strong> Conexión no establecida con el servidor WebSocket ip: '+ ipWs;
        msg+='<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
        msg+='<span aria-hidden="true">&times;</span>';
        msg+='</button></div>';
        $('#msg').html(msg);
    };
    //cuando le responde el servidor, el cliente compara que el mensaje  y ejecuta la funcion play.
    websocket_server.onmessage = function(e)
    {
        var button = $("#play");
        var json = JSON.parse(e.data);
        switch(json.type) {
            case 'play':
                button.html('<i class="fa fa-pause-circle" aria-hidden="true"></i>');
                break;
            case 'pausar':
                button.html("<i class='fa fa-play-circle' aria-hidden='true'></i>");
                break;
            case 'restart':
                button.html("<i class='fa fa-play-circle' aria-hidden='true'></i>");
                estado=true; 
                break;
            case 'conecc':
                var msg='<div class="alert alert-success alert-dismissible fade show" role="alert">';
                    msg+='<strong>Felicidades!</strong> Conexión establecida con el servidor WebSocket ip: '+ ipWs;
                    msg+='<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
                    msg+='<span aria-hidden="true">&times;</span>';
                    msg+='</button></div>';
                    $('#msg').html(msg);
                estado=true;
                break;
        }
        console.log(json.type);
    };
    // Events
    $('#play').on('click',function(e){
        if(estado){
            console.log('play')
            websocket_server.send(1);
        }else{
            console.log('pausar')
            websocket_server.send(0);
        }
        estado=!estado;
    });
    $('#restart').on('click',function(e){
        console.log('restart');
        websocket_server.send(2);
    });
});