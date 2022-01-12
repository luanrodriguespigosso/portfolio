<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];

    ini_set( 'display_erros', 1 );
    error_reporting( E_ALL );

    $from = "contato@luanrodriguespigosso.com.br";
    $to = "luanrodriguespigosso@gmail.com";
    $subject = "E-mail do site - ".$name;
    $message = 'Nome: '.$name.' --- Menssagem: '.$msg.' --- Email: '.$email;
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);

    header('Location: ../../index.html');
?>