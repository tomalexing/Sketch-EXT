<?php
$to = "nickmy@yandex.ru";
if (isset($_POST['email'])) {
    $text = "Email: " . strip_tags(trim($_POST["email"]));

    
    $headers = "MIME-Version: 1.0" . "\r\n"; 
    $headers .= "Content-type:text/plain; charset=utf-8" . "\r\n"; 
    $headers .= "From: ".strip_tags(trim($_POST["email"])). "\r\n";
    
    if (mail($to, "Подписка с сайта sketchtuts", $text)) {
         header('Location: http://sketchtuts.iondigi.com');
    } else {
        echo "Error";
    }
    exit();
}
?>