<?php


require_once("conectar.php");

class Campers extends Conectar{
    public function get_campers()
    {
        try {
            $conectar = parent::Conexion();
            parent::set_name();
            $stm = $conectar->prepare("SELECT * FROM campers");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function insert_campers($nombreCamper, $apellidoCamper, $fechaNac, $idReg)
    {
        $conectar = parent::Conexion();
        parent::set_name();
        try {
            $stm = "INSERT INTO campers(nombreCamper, apellidoCamper, fechaNac, idReg) VALUES(?,?,?,?)";
            $stm = $conectar->prepare($stm);
            $stm->bindValue(1,$nombreCamper);
            $stm->bindValue(2,$apellidoCamper);
            $stm->bindValue(3,$fechaNac);
            $stm->bindValue(4,$idReg);
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function delete_camper($id)
    {
        $conectar = parent::Conexion();
        parent::set_name();
        $sql = "DELETE FROM campers WHERE idCamper=?";
        $sql = $conectar->prepare($sql);
        $sql->bindValue(1, $id);
        $sql->execute();
        return $result = $sql->fetchAll(PDO::FETCH_ASSOC);
    }
}


?>