<?php

    include 'gestion-error.php';
    try
    {
        $bdd_connect = new PDO('mysql:host=localhost;dbname=portfolio', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    }
    catch(Exception $error)
    {
        die('ERROR: ' . $error->getMessage());
    }




?>