<?php

/**
 * CbProductorController clase donde agrupamos todas las acciones
 * CRUD (Create Read Update Delete), y otras utilidades adicionales para la
 * tabla de la base de datos <b>cb_language</b>.
 * CbProductorController class where we group all actions CRUD (Create Read Update Delete),
 * and additional utilities for database table data <b>cb_language</b>.
 * @author Xules Puedes seguirme en mi web http://www.codigoxules.org).
 * You can follow me on my website http://www.codigoxules.org/en
 */
class CbCanteraController {
    var $cdb = null;
    /**
     * Devolvemos todos los resultados de la consulta sobre cb_language.
     * We return all the results of the query on cb_language.
     */
    public function readAll(){
        $query = "SELECT * FROM mineria.cantera;";
        $statement = $this->cdb->prepare($query);
        $statement->execute();
        $rows = $statement->fetchAll(\PDO::FETCH_OBJ);
        return $rows;
    }

    /**
 * Creamos un nuevo idioma con los parámetros pasados.
 * We create a new language with parameters .
 * @param type $id
 * @param type $codigo
 * @param type $descripcion
 */
    function create($codificacion, $partido, $derecho, $secuencia, $expte, $caracteristica, $expediente, $anio,
      $nombre,$mineral,$titular,$estado,$productor,$localidad,$nomenclatura,$reservas,$unidad,$sector){
      $sqlInsert = "INSERT INTO mineria.cantera(codificacion, partido, derecho, secuencia, expte, caracteristica, expediente, anio,
        nombre,mineral,titular,estado,productor,localidad,nomenclatura,reservas,unidad,sector)"
        . " VALUES ('".$codificacion."',".$partido.",".$derecho.",".$secuencia.",'".$expte."','".$caracteristica."','".$expediente."',".
        $anio.",'".$nombre."',".$mineral.",'".$titular."',".$estado.",".$productor.",'".$localidad."','".$nomenclatura."',".$reservas.",'".$unidad."',".$sector.");";
      try {
        $this->cdb->exec($sqlInsert);
      } catch (PDOException $pdoException) {
        echo 'Error crear un nuevo elemento cantera en create(...): '.$pdoException->getMessage();
        exit();
      }
    }

   /**
 * Actualizamos los valores del idioma que pasamos en el parámetro $idlanguage.
 * We update the values of the language we passed on the $idlanguage parameter.
 * @param type $id
 * @param type $codigo
 * @param type $descripcion
 */
   public function update($id,$codificacion, $partido, $derecho, $secuencia, $expte, $caracteristica, $expediente, $anio,
     $nombre,$mineral,$titular,$estado,$productor,$localidad,$nomenclatura,$reservas,$unidad,$sector){
    $sqlUpdate = "UPDATE mineria.cantera SET codificacion = '".$codificacion."', partido = ".$partido.", derecho = ".$derecho.", secuencia = ".$secuencia.
    ", expte = '".$expte."', caracteristica = '".$caracteristica."', expediente = '".$expediente."', anio = ".$anio.", nombre = '".$nombre."', mineral = ".$mineral.", titular = '".$titular."', estado = ".$estado.", productor = "
    .$productor.", localidad = '".$localidad."', nomenclatura = '".$nomenclatura."', reservas = ".$reservas.", unidad = '".$unidad."', sector = ".$sector
    ." WHERE  id  = ".$id.";";
    try {
        $this->cdb->exec($sqlUpdate);
    } catch (PDOException $pdoException) {
        echo $sqlUpdate;
        echo 'Error actualizar un nuevo elemento cantera en update(...): '.$pdoException->getMessage();
        exit();
    }
   }

/**
 * Eliminamos el idioma que pasamos como parámetro.
 * We remove the language that we as a parameter.
 * @param type $id
 */
   public function delete($id){
    $sqlDelete =
        "DELETE FROM mineria.cantera WHERE id = ".$id.";";
    try {
        $this->cdb->exec($sqlDelete);
    } catch (Exception $exception) {
        echo ' - Error al eliminar un cantera en la función delete(...): '.$exception->getMessage();
        exit();
    }
   }
}
?>
