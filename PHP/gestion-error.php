<?php



  $lien=mysqli_connect('localhost', 'root', '');

  if(!$lien)
  {
    $error="Impossible connextion au serveur myMySQL";
    echo $error;
    exit();
  };
  if(!mysqli_set_charset($lien, 'utf8'))
  {
    $error="Impossible de configurer l'encodage";
    echo $error;
    exit();
  };
  if(!mysqli_select_db($lien, 'portfolio'))
  {
    $error="Impossible de se connecter à la base de données";
    echo $error;
    exit();
  };
?>