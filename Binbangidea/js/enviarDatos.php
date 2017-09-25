<?php
if($_POST) {
	$Name=$_POST['Name'];
	$Email=$_POST['Email'];
	$Subject=$_POST['Subject'];
	$Mensaje=$_POST['Mensaje'];

	$texto  ="*Usuario: ". $Name. "\n";
	$texto .="*Email: ". $Email."\n";
	$texto .="*Plan: ". $Subject."\n";
	$texto .="*Mensaje Adicional: ". $Mensaje."\n";

	mail("info@bigbangidea.com",$Subject."-".$Name, $texto );
	echo json_encode(array("respuesta"=>'Gracias por contactarse con nosotros, '));
}
