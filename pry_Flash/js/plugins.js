// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// Place any jQuery/helper plugins in here.
$('#PreciosModales').on('show.bs.modal', function (event) {
    console.log('modal');
    list=[
        {id:0,titulo:'Ejecutivo',text:[
            '160 horas espacio Coworking',
            '8 horas Sala de Reuniones',
            'Internet Alta Velocidad',
            'Escritorio Fijo',
            'Dirección Postal ',
            'Locker ',
            '2 charlas mensuales gratuitas',
            'Desc. 20% talleres y charlas ',
            'Cafetería Ilimitada'
        ]},
        {id:1,titulo:'Emprendor',text:[
            '80 horas espacio Coworking',
            '6 horas Sala de Reuniones ',
            'Internet Alta Velocidad',
            'Dirección Postal',
            'Locker ',
            '1 charla mensual gratuita',
            'Desc. 15% talleres y charlas',
            'Cafetería Ilimitada'
        ]},
        {id:2,titulo:'Freelancer',text:[
            '40 horas espacio coworking',
            'horas Sala de Reuniones',
            'Internet Alta Velocidad',
            'Dirección Postal',
            'Locker',
            'Desc. 10% talleres y charlas',
            'Cafetería Ilimitada'
        ]},
        {id:3,titulo:'Económico',text:[
            '20 horas espacio Coworking',
            '3 horas Sala de Reuniones',
            'Internet Alta Velocidad ',
            'Dirección Postal',
            'Locker ',
            'Cafetería Ilimitada'
        ]},
        {id:4,titulo:'Básico',text:[
            '10 horas espacio Coworking ',
            '1 horas Sala de Reuniones',
            'Internet Alta Velocidad',
            'Locker',
            'Cafetería Ilimitada'
        ]},
        {id:5,titulo:'Day',text:[
            '8 horas espacio coworking',
            'Internet Alta Velocidad',
            'Locker',
            'Cafetería Ilimitada'
        ]},
        {id:6,titulo:'Oficina Privada',text:[
            'Recepcionista',
            'Internet Alta Velocidad',
            '12 horas Sala de Reuniones',
            '10% desc. VirtualLab y FabLab',
            '20% desc, Cursos y Talleres',
            '10% desc. Sala de Eventos y Auditorio'
        ]},
        {id:7,titulo:'Paquete Arquitecto',text:[
            '100 horas espacio Coworking',
            'Internet Alta Velocidad ' ,
            'Sala de Reuniones'        ,
            '20 horas Mesas Arquitectónicas',
            '2 horas Impresión 3D',
            '20% desc, Cursos y Talleres',
            'Dirección Postal',
            'Locker'
        ]},
        {id:8,titulo:'Casillero',text:[
            'Servicio de Oficina Virtual',
            'Llamadas y Mensajes',
            'Recepción de Documentos'
        ]},
        {id:9,titulo:'VirtualLab',text:[
            'Sistema de Realidad Virtual'
        ]},
        {id:10,titulo:'Diseño 3D',text:[
            'Diseño 3D en computador'
        ]},
        {id:11,titulo:'FabLab',text:[
            'Impresión 3D (cda gramo)'

        ]}
    ] ;
    var button = $(event.relatedTarget) // Button that triggered the modal
    var idRec = button.data('whatever') // Extract info from data-* attributes
    var plan=list[idRec];

    var hmlString='<ul>';
    var txt;
    for(var i=0;i<plan.text.length;i++){
        txt='<li><span>'+plan.text[i]+'</span></li>';
        hmlString+=txt
    }
    hmlString+='</ul>';

    var modal = $(this)
    modal.find('.modal-title').text(list[idRec].titulo);
    modal.find('.contenido').html(hmlString);

});
