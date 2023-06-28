<?php

require_once("conectar.php");
require_once("modelsReg.php");

$region = new Region();
$body = json_decode(file_get_contents("php://input"),true);

switch ($_GET["op"]) {
    case 'GetAll':
        $datos = $region->get_region();
        echo json_encode($datos);
        break;
    case 'Insert':
        $datos = $region->insert_region(
            $body['nombreReg'],
            $body['idDep']);
            echo json_encode("Datos Ingresados");
        break;
    case 'Delete':
        $datos = $region->delete_region($_GET['id']);
        echo json_encode('Region Eliminado');
        break;
    default:
        # code...
        break;
}

?>