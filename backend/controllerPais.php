<?php

require_once("conectar.php");
require_once("modelsPais.php");

$paises = new Pais();
$body = json_decode(file_get_contents("php://input"),true);

switch ($_GET["op"]) {
    case 'GetAll':
        $datos = $paises->get_pais();
        echo json_encode($datos);
        break;
    case 'Insert':
        $datos = $paises->insert_pais(
            $body['nombrePais']);
            echo json_encode("Datos Ingresados");
        break;
    case 'Delete':
        $datos = $paises->delete_pais($_GET['id']);
        echo json_encode('Pais Eliminado');
        break;
    default:
        # code...
        break;
}

?>