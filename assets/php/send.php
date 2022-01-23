<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];

    ini_set( 'display_erros', 1 );
    error_reporting( E_ALL );
    $from = "contato@luanrodriguespigosso.com.br";
    $subject = "E-mail do site - ".$name;
    $to = "luanrodriguespigosso@gmail.com";
    $message = "
    <html>
    <body>
    <h3>Olá, me chamo $name.</h3>
    <br>
    <p>$msg</p>
    <br>
    <p>E-mail: $email</p>
    </body>
    </html>
    ";
    
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
    $headers[] = 'From: '.$name.' <'.$email.'>';

    mail($to,$subject,$message, implode("\r\n", $headers));

    header('Location: ../../index.html');

?>