<?php

require_once("conectar.php");

class Region extends Conectar{
    public function get_region()
    {
        try {
            $conectar = parent::Conexion();
            parent::set_name();
            $stm = $conectar->prepare("SELECT * FROM region");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function insert_region($nombreReg)
    {
        $conectar = parent::Conexion();
        parent::set_name();
        try {
            $stm = "INSERT INTO region(nombreReg) VALUES(?)";
            $stm = $conectar->prepare($stm);
            $stm->bindValue(1,$nombreregion);
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function delete_region($id)
    {
        $conectar = parent::Conexion();
        parent::set_name();
        $sql = "DELETE FROM region WHERE idReg=?";
        $sql = $conectar->prepare($sql);
        $sql->bindValue(1, $id);
        $sql->execute();
        return $result = $sql->fetchAll(PDO::FETCH_ASSOC);
    }
}

?>