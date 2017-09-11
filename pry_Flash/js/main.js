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
        {id:0,titulo:'Ejecutivo',},
        {id:1,titulo:'Emprendor'},
        {id:2,titulo:'Freelancer'},
        {id:3,titulo:'Económico'},
    ];
    precio.list2=[
        {id:4,titulo:'Básico'},
        {id:5,titulo:'Day'},
        {id:6,titulo:'Oficina Privada'},
        {id:7,titulo:'Paquete Arquitecto'},
    ];
    precio.list3=[{id:8,titulo:'Casillero'},
        {id:9,titulo:'VirtualLab'},
        {id:10,titulo:'Diseño 3D'},
        {id:11,titulo:'FabLab'}];
});


