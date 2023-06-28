<?php

require_once("conectar.php");

class Departamento extends Conectar{
    public function get_dep()
    {
        try {
            $conectar = parent::Conexion();
            parent::set_name();
            $stm = $conectar->prepare("SELECT * FROM departamento");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function insert_dep($nombreDep, $idPais)
    {
        $conectar = parent::Conexion();
        parent::set_name();
        try {
            $stm = "INSERT INTO departamento(nombreDep, idPais) VALUES(?,?)";
            $stm = $conectar->prepare($stm);
            $stm->bindValue(1,$nombreDep);
            $stm->bindValue(2,$idPaisP);
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function delete_dep($id)
    {
        $conectar = parent::Conexion();
        parent::set_name();
        $sql = "DELETE FROM departamento WHERE idDep=?";
        $sql = $conectar->prepare($sql);
        $sql->bindValue(1, $id);
        $sql->execute();
        return $result = $sql->fetchAll(PDO::FETCH_ASSOC);
    }
}

?>