<?php

$server="localhost";
$user="ingeniero";
$password="M3dr@n007";
$db="Banco";


$sql=new mysqli($server,$user,$password,$db);

if($sql->connect_error){

    die('problemas de conexion('.$sql->connect_error);
}else{

    
}






?>