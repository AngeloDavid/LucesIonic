angular.module('indexPage', []).controller('index',function () {
    var inicio =this;
    inicio.Sector=[
        {
        id:1,
        title:'Ambientacion',
        parrafo:'Control de los sensores de movimiento',
        ip:'192.168.0.178',
        disp:[{
            id:1,
            title:'Luz 1',
            ordenes:['enc1','off1'],
            disp:true
        },{
            id:2,
            title:'Luz 2',
            ordenes:['enc2','off2'],
            disp:true
        }
        ]
    },{
        id:2,
        title:'Homicidio',
        parrafo:'Control de los sensores de movimiento',
        ip:'192.168.0.179',
        disp:[{
            id:3,
            title:'Respiracion',
            ordenes:['mot11','motooff1'],
            disp:true
        },{
            id:4,
            title:'Lámpara',
            ordenes:['motl2','motooff2'],
            disp:true
        },{
            id:5,
            title:'Luz 1',
            ordenes:['enc1','off1'],
            disp:true
        },
            {
                id:6,
                title:'Luz 2',
                ordenes:['enc2','off2'],
                disp:true
            }

        ]
    },
        {
            id:3 ,
            title:'Suicidio',
            parrafo:'Control de los sensores de movimiento',
            ip:'192.168.0.180',
            disp:[{
                id:7,
                title:'Luz 1',
                ordenes:['enc1','off1'],
                disp:true
            },{
                id:8,
                title:'Luz 2',
                ordenes:['enc2','off2'],
                disp:true
            }
            ]
        }
    ] ;

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
    }

});


