angular.module('indexPage', []).controller('index',function () {
    var inicio =this;
    inicio.titulo="CREAMOS LAS MEJORES ESTRATEGIAS";
    inicio.redes=[
        {
            ico:'facebook',
            link:'https://www.facebook.com/bigbangidea',
            disp:true
        },
        {
            ico:'twitter',
            link:'https://twitter.com/bigbangidea',
            disp:true
        },
        {
            ico:'instagram',
            link:'https://www.instagram.com/bigbangidea/',
            disp:true
        }
    ];
})
    .controller('leyenda',function () {
    var leyen=this;
    leyen.titulo="Vamos a trabajar juntos";
    leyen.contenido="¿Listo para crear la próxima gran cosa? Trabaje con Big Bang Idea y no se sentirá decepcionado";
})
    .controller('servicios',function () {
    var servicios=this;
    servicios.contenido="En Big Bang Idea, Creamos los tipos de estrategias que harán  que tu empresa tenga mayor rentabilidad en las áreas de:";
    servicios.list=[
        {
            id:0,
            ico:'./assets/ser-icon/icon-1.png',
            titulo:'Marketing Digital',
            link:'',
            disp:true
        },
        {
            id:1,
            ico:'./assets/ser-icon/icon-2.png',
            titulo:'Marketing Tradicional',
            link:'',
            disp:true
        },
        {
            id:2,
            ico:'./assets/ser-icon/icon-3.png',
            titulo:'Marketing Estratégico',
            link:'',
            disp:true
        },
        {
            id:3,
            ico:'./assets/ser-icon/icon-4.png',
            titulo:'Producción',
            link:'',
            disp:true
        },
        {
            id:4,
            ico:'./assets/ser-icon/icon-5.png',
            titulo:'APPS',
            link:'',
            disp:true
        },
        {
            id:6,
            ico:'./assets/ser-icon/icon-6.png',
            titulo:'Diseño Gràfico',
            link:'',
            disp:true
        }

    ]
})
    .controller('clientes',function () {
        var cliente=this;
        cliente.titulo="Clientes";
        cliente.Empresas=[
            {
                id:0,
                logo:'./assets/clientes/LOGO-1.png',
                descp:'logo-1',
                clss:'active',
                disp:true
            },
            {
                id:1,
                logo:'./assets/clientes/LOGO-2.png',
                descp:'logo-2',
                clss:'',
                disp:true
            },
            {
                id:2,
                logo:'./assets/clientes/LOGO-3.png',
                descp:'logo-3',
                clss:'',
                disp:true
            },
            {
                id:3,
                logo:'./assets/clientes/LOGO-4.png',
                descp:'logo-4',
                clss:'',
                disp:true
            },
            {
                id:4,
                logo:'./assets/clientes/LOGO-5.png',
                descp:'logo-5',
                clss:'',
                disp:true
            }

        ];
        cliente.Artistas=[
            {
                id:5,
                logo:'./assets/clientes/LOGO-6.jpg',
                descp:'logo-6',
                clss:'',
                disp:true
            }
        ];
    })
    .controller('Contacto',function () {
        var contacto= this;
        contacto.titulo="Contáctanos";
        contacto.mapaMostrar=true;
        contacto.servicios=[
            {id:0,titulo:'Ejecutivo', carac:[
                '160 horas espacio Coworking',
                '8 horas Sala de Reuniones',
                'Internet Alta Velocidad',
                'Escritorio Fijo',
                'Dirección Postal ',
                'Locker ',
                '2 charlas mensuales gratuitas',
                'Desc. 20% talleres y charlas ',
                'Cafetería Ilimitada'],
                precio:'',cssShow:''},
            {id:1,titulo:'Emprendor', carac:[
                '80 horas espacio Coworking',
                '6 horas Sala de Reuniones ',
                'Internet Alta Velocidad',
                'Dirección Postal',
                'Locker ',
                '1 charla mensual gratuita',
                'Desc. 15% talleres y charlas',
                'Cafetería Ilimitada'],
                precio:'',cssShow:''},
            {id:2,titulo:'Freelancer', carac:[
                '40 horas espacio coworking',
                'horas Sala de Reuniones',
                'Internet Alta Velocidad',
                'Dirección Postal',
                'Locker',
                'Desc. 10% talleres y charlas',
                'Cafetería Ilimitada'],
                precio:'',cssShow:''},
            {id:3,titulo:'Económico', carac:[
                '20 horas espacio Coworking',
                '3 horas Sala de Reuniones',
                'Internet Alta Velocidad ',
                'Dirección Postal',
                'Locker ',
                'Cafetería Ilimitada'],
                precio:'',cssShow:''},
            {id:4,titulo:'Básico',carac:[
                '10 horas espacio Coworking ',
                '1 horas Sala de Reuniones',
                'Internet Alta Velocidad',
                'Locker',
                'Cafetería Ilimitada'
            ],precio:'',cssShow:''},
            {id:5,titulo:'Day',carac:[
                '8 horas espacio coworking',
                'Internet Alta Velocidad',
                'Locker',
                'Cafetería Ilimitada'
            ],precio:'',cssShow:''},
            {id:6,titulo:'Oficina Privada',carac:[
                'Recepcionista',
                'Internet Alta Velocidad',
                '12 horas Sala de Reuniones',
                '10% desc. VirtualLab y FabLab',
                '20% desc, Cursos y Talleres',
                '10% desc. Sala de Eventos y Auditorio'
            ],precio:'',cssShow:''},
            {id:7,titulo:'Arquitecto',carac:[
                '100 horas espacio Coworking',
                'Internet Alta Velocidad ' ,
                'Sala de Reuniones'        ,
                '20 horas Mesas Arquitectónicas',
                '2 horas Impresión 3D',
                '20% desc, Cursos y Talleres',
                'Dirección Postal',
                'Locker'
            ],precio:'',cssShow:''},
            {id:8,titulo:'Casillero',carac:[
                'Servicio de Oficina Virtual',
                'Llamadas y Mensajes',
                'Recepción de Documentos'
            ],precio:'',cssShow:''},
            {id:9,titulo:'VirtualLab',carac:[
                'Sistema de Realidad Virtual'
            ],precio:'',cssShow:''},
            {id:10,titulo:'Diseño 3D',carac:[
                'Diseño 3D en computador'
            ],precio:'',cssShow:''},
            {id:11,titulo:'FabLab',carac:[
                'Impresión 3D (cda gramo)'
            ],precio:'',cssShow:''}
        ];
        contacto.address=[
            {
                lng: 'esp',
                datos: [
                    {
                        id: 0,
                        titulo: 'Dirección',
                        ico: 'building',
                        desp: 'Baron de Humboldt N31-11 y Av. La Coruña  (Sentido norte sur)',
                        disp:true
                    },
                    {id:1,titulo:'Teléfonos',ico:'phone',desp:"(+539) 2 5127 246 / (+539) 983 372 923",
                        disp:true},
                    {
                        id:2,titulo: 'E-Mail',ico:'envelope',desp:'info@bigbangidea.com'
                        ,disp:true
                    }
                ]
            }
        ];
        contacto.enviarMensaje=function (datosCont) {
            console.log(datosCont)  ;
            $.ajax({
                url: 'js/enviarDatos.php',
                type: 'POST',
                dataType: 'json',
                data: {Name: datosCont.Name , Email: datosCont.Email, Subject: datosCont.plan,Mensaje:datosCont.mensaje},
            })
                .done(function(data) {
                    console.log(data);
                    console.log("success");
                    var html = '<div class="alert alert-info" role="alert">';
                    html+='<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
                    html+='<span aria-hidden="true">&times;</span></button>';
                    html += data.respuesta;
                    html += '</div>';
                    $('#mensaje').html(html);

                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });
        }
    });
