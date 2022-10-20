<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$messaggio = $_POST['messaggio'];
if ($nome == "" && $email == "" && $messaggio == "") {
    header('location: ../home');
    die();
}
$a = "filippoballottaxd@gmail.com";
$oggetto = "email dal moduo contatti del sito web";
$messaggio = "
<h1>Messaggio dal sito:</h1>
<br>
<b>NOME:</b>
" . $nome . "
<br>
<b>EMAIL:</b>
" . $email . "
<br>
<b>MESSAGGIO:</b>
" . $messaggio . "

";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: filippoballottaxd@gmail.com' . "\r\n";

if (mail($a, $oggetto, $messaggio, $headers)) {
    header('location: ../contatti');
    die();
}
