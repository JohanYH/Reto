<?php

class Conectar {
    protected $db;

    protected function Conexion()
    {
        try {
            $conectar = $this->db = new PDO("mysql:local=localhost;dbname=campuslands", "campus", "campus2023");
            return $conectar;
        } catch (Exeception $e) {
            return $e->getMessge();
        }
    }

    public function set_name()
    {
        return $this->db->query("SET NAMES 'utf8'");
    }
}

?>