<?php

require_once("conectar.php");
require_once("modelsDep.php");

$departamento = new Departamento();
$body = json_decode(file_get_contents("php://input"),true);

switch ($_GET["op"]) {
    case 'GetAll':
        $datos = $departamento->get_dep();
        echo json_encode($datos);
        break;
    case 'Insert':
        $datos = $departamento->insert_dep(
            $body['nombreDep'],
            $body['idPais']);
            echo json_encode("Datos Ingresados");
        break;
    case 'Delete':
        $datos = $departamento->delete_dep($_GET['id']);
        echo json_encode('Departamento Eliminado');
        break;
    default:
        # code...
        break;
}