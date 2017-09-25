/**
*  Module reservas
*
* Description
*/

angular.module('indexwasihome', [])
.controller('Contactenos', function(){
	var contact=this;	

	contact.enviarDatos= function (frm) {
		console.log(frm);
        console.log("hola")
    $.ajax({
            url: 'js/enviarDatos.php',
            type: 'POST',
            dataType: 'json',
            data: {Name: frm.Name , Email: frm.Email,Phone:frm.Phone,Subject: frm.Producto,Mensaje:frm.Mensaje},
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
  };
	
});