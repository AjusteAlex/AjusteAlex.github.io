
<?php
  if(isset($_POST['submit'])) {
    try {
        $bdd_connect = new PDO('mysql:host=localhost;dbname=portfolio', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    } catch (Exception $error) {
        die('ERROR: ' . $error->getMessage());
    }


    if ($_POST["name"] != "" && $_POST["email"] != "" && $_POST["message"] != "") {

        //Tout est ok, enregistrement en base de donnees est autorisée//
        $sql="INSERT INTO `formulaire_contact` (`id_message`, `name`, `email`, `message`) VALUES (NULL, '" . $_POST["name"] . "', '" . $_POST["email"] . "', '" . $_POST["message"] . "' )";
        $req = $bdd_connect->prepare($sql) or die(print_r($bdd_connect->errorInfo()));
        $req->execute();
        $req->closeCursor();

        header("Location: http://localhost/portfolio/#contact");

    } else {
        header("Location: http://localhost/portfolio/error404.html ");
    }
}
?>