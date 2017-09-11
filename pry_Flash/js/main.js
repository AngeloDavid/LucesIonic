angular.module('indexPage', []).controller('index',function () {
    var inicio =this;
    inicio.titulo="NO ES UNA OFICINA, ES TU CENTRO DE";
    inicio.subtitulo="INOVACI0N Y COWORKING";


}).controller('servicios',function () {
    var servicios= this;
    servicios.list=[
        {id:0, titulo:'FabLAbs', src:'img/servicios/fabllab.jpg',link:'',clas:'active'},
        {id:1,titulo:'SpaceLabs',src:'img/servicios/oficinaCompartidas.png',link:'',clas:''},
        {id:2,titulo:'WorkingLab',src:'img/servicios/centro_inovacioin.jpg',link:'',clas:''},
        {id:3,titulo:'CoWorking', src:'img/servicios/coworking.png',link:'',clas:''},
        {id:4,titulo:'SpiritLab',src:'img/servicios/incuba.jpg',link:'',clas:''},
        {id:5,titulo:'VirtualLab',src:'img/servicios/virtuallab.jpg',link:'',clas:''},
        {id:6,titulo:'TechLab', src:'img/servicios/cursoseventos.jpg',link:'',clas:''},
        {id:7,titulo:'Artistlab',src:'img/servicios/artislab.jpg',link:'',clas:''}
        ];
}).controller('Precios',function () {
    var precio = this;
    precio.list1=[
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
        {id:7,titulo:'Paquete Arquitecto',carac:[
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
    precio.mostrar= function (plan,desp) {
        if(desp){
            plan.cssShow='show'
        }else {
            plan.cssShow=''
        }
    }
});


