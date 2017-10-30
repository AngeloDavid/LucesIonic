
angular.module('indexPage', []).controller('index',
    ['$scope',function ($scope) {
    var inicio =this;


    /*var ipws='192.168.100.39';
    var ptws='8080';
    $scope.estado=true;
    var websocket_server = new WebSocket("ws://"+ipws+":"+ptws+"/");

    websocket_server.onopen = function(e) {
        console.log("coneccion establecida");
        websocket_server.send( 'cli_sokect' );
    };

    websocket_server.onerror = function(e) {
        console.log('Error',e.data);
    };

    //cuando le responde el servidor, el cliente compara que el mensaje  y ejecuta la funcion play.
    websocket_server.onmessage = function(e)
    {

        var json = JSON.parse(e.data);
        switch(json.type) {
            case 'play':
                $scope.cambio(false);
                break;
            case 'pausar':
                $scope.cambio(true);
                break;
        }

        console.log('dato',json);
    };

    $scope.cambio=function (est) {
        $scope.estado=est;
        
        console.log($scope.estado);
    };*/

    /*inicio.Sector=[
        {
            id:1,
            title:'Ambientación',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.125',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:2,
            title:'Homicidio 1',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.126',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:3,
            title:'Homicidio 2',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.127',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:4,
            title:'Asesino',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.128',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:5,
            title:'Pasillo Gato',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.129',
            est:true,
            disp:[
                {
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                    id:2,
                    title:'Escena 2',
                    ordenes:['enc2','off2'],
                    disp:true,
                    isEmr:false
                },{
                id:3,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:6,
            title:'Pasillo Puertas',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.130',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:7,
            title:'Pasillo Puertas 2',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.131',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:8,
            title:'Arañas 1',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.132',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:9,
            title:'Arañas 2',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.133',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:10,
            title:'Ratas',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.134',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:11,
            title:'Monja Ambientación',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.135',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:12,
            title:'Monja',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.136',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:13,
            title:'Gradas Morgue',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.137',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:14,
            title:'Morgue',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.138',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:15,
            title:'Gradas Aro',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.139',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:16,
            title:'Niña Aro',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.140',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:17,
            title:'Cuarto Muñecas',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.141',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        }
    ] ;*/
    $scope.Sector=[
        {
            id:1,
            title:'Ambientación',
            parrafo:'Control de los sensores de movimiento',
            ip:'localhost:3000/1',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:false,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:false,
                isEmr:true
            }
            ]
        },
        {
            id:2,
            title:'Homicidio 1',
            parrafo:'Control de los sensores de movimiento',
            ip:'localhost:3000/2',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:false,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:false,
                isEmr:true
            }
            ]
        },
        {
            id:3,
            title:'Homicidio 2',
            parrafo:'Control de los sensores de movimiento',
            ip:'localhost:3000/3',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:false,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:false,
                isEmr:true
            }
            ]
        },
        {
            id:4,
            title:'Asesino',
            parrafo:'Control de los sensores de movimiento',
            ip:'localhost:3000/4',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:false,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:false,
                isEmr:true
            }
            ]
        },
        {
            id:5,
            title:'Pasillo Gato',
            parrafo:'Control de los sensores de movimiento',
            ip:'localhost:3000/5',
            est:true,
            disp:[
                {
                    id:1,
                    title:'Escena 1',
                    ordenes:['enc1','off1'],
                    disp:false,
                    isEmr:false
                },{
                    id:2,
                    title:'Escena 2',
                    ordenes:['enc2','off2'],
                    disp:false,
                    isEmr:false
                },{
                    id:3,
                    title:'Emergencia',
                    ordenes:['emerg','off'],
                    disp:true,
                    isEmr:true
                }
            ]
        },
        {
            id:6,
            title:'Pasillo Puertas',
            parrafo:'Control de los sensores de movimiento',
            ip:'localhost:3000/6',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:false,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:false,
                isEmr:true
            }
            ]
        },
        {
            id:7,
            title:'Pasillo Puertas 2',
            parrafo:'Control de los sensores de movimiento',
            ip:'localhost:3000/7',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:false,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:false,
                isEmr:true
            }
            ]
        },
        {
            id:8,
            title:'Arañas 1',
            parrafo:'Control de los sensores de movimiento',
            ip:'localhost:3000/8',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:false,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:false,
                isEmr:true
            }
            ]
        },
        {
            id:9,
            title:'Arañas 2',
            parrafo:'Control de los sensores de movimiento',
            ip:'localhost:3000/9',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:false,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:false,
                isEmr:true
            }
            ]
        },
        {
            id:10,
            title:'Ratas',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.134',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:11,
            title:'Monja Ambientación',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.135',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:12,
            title:'Monja',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.136',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:13,
            title:'Gradas Morgue',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.137',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:14,
            title:'Morgue',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.138',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:15,
            title:'Gradas Aro',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.139',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        },
        {
            id:16,
            title:'Niña Aro',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.140',
            est:true,
            disp:[
                {
                    id: 1,
                    title: 'Escena 1',
                    ordenes: ['enc1', 'off1'],
                    disp: true,
                    isEmr: false
                }
                ,{
                    id:2,
                    title:'Emergencia',
                    ordenes:['emerg','off'],
                    disp:true,
                    isEmr:true
                }
            ]
        },
        {
            id:17,
            title:'Cuarto Muñecas',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.141',
            est:true,
            disp:[{
                id:1,
                title:'Escena 1',
                ordenes:['enc1','off1'],
                disp:true,
                isEmr:false
            },{
                id:2,
                title:'Emergencia',
                ordenes:['emerg','off'],
                disp:true,
                isEmr:true
            }
            ]
        }
    ] ;
    inicio.emg=true;

    inicio.cambiar= function cambiar(idbutton,ipSector, luces){
        var ip =ipSector;
        var sw = document.getElementById(idbutton).checked;
        console.log("IP:",ipSector,"\t Dispositivo",luces.title);
        console.log(sw,'=',idbutton);
        if(sw){
            inicio.setOrden(ip,luces.ordenes[0]);
        }else{
            inicio.setOrden(ip,luces.ordenes[1]);
        }

    } ;

    inicio.setOrden=function (ip,orden){
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET","http://"+ip+"/"+orden, true);
        xhttp.send();
    };

    inicio.emergencia=function () {

            angular.forEach($scope.Sector,function (sect) {

                angular.forEach(sect.disp,function (disp) {
                    if(disp.isEmr){
                        console.log(sect.ip, inicio.emg);
                        inicio.emerOneBy(sect.disp,sect.id,disp.id,sect.ip,disp.ordenes,inicio.emg);
                        document.getElementById('swt'+sect.id+'.'+disp.id).checked= inicio.emg;
                    }
                })
            });
        inicio.emg=!inicio.emg;
    };
    inicio.emerbtn=function (disp,idSector,idDisp,ipSector,ordenes) {
        var sw = document.getElementById('swt'+idSector+'.'+idDisp).checked;
        inicio.emerOneBy(disp,idSector,idDisp,ipSector,ordenes,sw);

    };
    inicio.emerOneBy=function (disp,idSector,idDisp,ipSector,ordenes,sw) {
        if(sw){
            inicio.setOrden(ipSector,ordenes[0]);
            angular.forEach(disp,function (dp) {
                if(!dp.isEmr){
                    document.getElementById('swt'+idSector+'.'+dp.id).checked=false;
                    inicio.setOrden(ipSector,dp.ordenes[1]);

                    dp.disp=false;
                    document.getElementById('swt'+idSector+'.'+dp.id).disabled=true;
                    document.getElementById('slide'+idSector+'.'+dp.id).className="slider round disabled";
                }
            });
        }else{
            inicio.setOrden(ipSector,ordenes[1]);
            angular.forEach(disp,function (dp) {
                if(!dp.isEmr){
                    dp.disp=true;
                    document.getElementById('swt'+idSector+'.'+dp.id).removeAttribute("disabled");
                    document.getElementById('slide'+idSector+'.'+dp.id).classList.remove("disabled");
                }
            });
        }


    };

    $scope.reloj=function () {
        var cont=0;
        setInterval(function () {
            $scope.comp();
            cont++;
            console.log(cont);
        }, 10000);
    };
    $scope.comp=function () {
        console.log('hola');
        /*$scope.list=$scope.Sector;*/
        angular.forEach($scope.Sector,function (sect) {
            console.log('funcion',$scope.status(sect));
            setTimeout($scope.status(sect),5000);
            /*angular.forEach(sect.disp,function (dp) {
                dp.disp=true;
            })*/
            
        });
        /*console.log('temp',$scope.list);
        $scope.Sector=$scope.list;
        
        console.log('lista',$scope.Sector);*/
    };
    $scope.sleep=function (delay) {
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
        }
    $scope.status=function (Sector) {
        var comp=0;
        var xhttp = new XMLHttpRequest();
        var est;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200)  {
                    xmlDoc=this.responseXML;
                    x=xmlDoc.getElementsByTagName("LUZ");
                    for(var i=0; i<Sector.disp.length;i++){
                        est=x[i].childNodes[0].nodeValue;

                        /*console.log("status",Sector.disp[i].disp);
                        console.log('est',est);
                        console.log('disp','swt'+Sector.id+'.'+Sector.disp[i].id)*/
                        if(est==1){
                            document.getElementById('swt'+Sector.id+'.'+Sector.disp[i].id).checked=true;
                            //inicio.setOrden(Sector.ip,Sector.disp[i].ordenes[0]);
                        }else{
                            document.getElementById('swt'+Sector.id+'.'+Sector.disp[i].id).checked=false;
                            //inicio.setOrden(Sector.ip,Sector.disp[i].ordenes[1]);
                        }
                        Sector.disp[i].disp=true;
                    }
                comp=1;

            };
            if (this.readyState == 4 && this.status == 0) {
                console.log('Eroor sector',Sector.ip);
                comp=2;

            }

        };
        xhttp.open("GET", "http://"+Sector.ip+"/status", true);
        xhttp.send();
        
        return comp;
    }

    /*inicio.playVideo = function () {
        console.log('play video',$scope.estado);
        if($scope.estado){
            websocket_server.send(1);
        }else{
            websocket_server.send(0);
        }
    }*/

}]);


