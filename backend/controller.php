<?php


require_once("conectar.php");
require_once("models.php");

$campers = new Campers();
$body = json_decode(file_get_contents("php://input"),true);

switch ($_GET["op"]) {
    case 'GetAll':
        $datos = $campers->get_campers();
        echo json_encode($datos);
        break;
    case 'Insert':
        $datos = $campers->insert_campers(
            $body['nombreCamper'],
            $body['apellidoCamper'],
            $body['fechaNac'],
            $body['idReg']);
            echo json_encode("Datos Ingresados");
        break;
    case 'Delete':
        $datos = $campers->delete_camper($_GET["id"]);
        echo json_encode("Camper Eliminado");
        break;
    default:
        # code...
        break;
}

?>