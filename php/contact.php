
<?php
 include 'connexion.php';

    if ($_POST["name"] != "" && $_POST["email"] != "" && $_POST["message"] != "" && isset($_POST['rgpd'])) {

        //Tout est ok, enregistrement en base de donnees est autorisée//
        $sql="INSERT INTO `formulaire_contact` (`id_message`, `name`, `email`, `message`) VALUES (NULL, '" . $_POST["name"] . "', '" . $_POST["email"] . "', '" . $_POST["message"] . "' )";

        $req = $bdd_connect->prepare($sql) or die(print_r($bdd_connect->errorInfo()));
        $req->execute();
        $req->closeCursor();

        header("Location: http://localhost/portfolio/#contact");

    } else {
        header("Location: http://localhost/portfolio/error404.html");

    }

?>