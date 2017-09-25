<?php
if($_POST) {
	$Name=$_POST['Name'];
	$Email=$_POST['Email'];
	$Phone=$_POST['Phone'];
	$Subject=$_POST['Subject'];
	$Mensaje=$_POST['Mensaje'];
	
	$texto ="Usuario: ". $Name. "\n";
	$texto .="Email: ". $Email."\n";
	$texto .="Telefono: ". $Phone."\n";
	$texto .="Producto: ". $Subject."\n";
	$texto .="Mensaje Adicional: ". $Mensaje."\n";
	if(mail("info@wasihome.com",$Subject."-".$Name, $texto )){
		echo json_encode(array("respuesta"=>'Gracias por contactarse con nosotros, '));
	}else{
		echo json_encode(array("respuesta"=>'Error Problemas con el correo'));
	}
	
}
