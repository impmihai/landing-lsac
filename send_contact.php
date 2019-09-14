<?php
$name = $_POST['first_name'].' '.$_POST['last_name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['mesaj'];

if ( preg_match( "/[\r\n]/", $name ) || preg_match( "/[\r\n]/", $email ) ) {
    echo "Mesajul nu a putut fi trimis.";
} else {
    $to = "mihai.lupea@gmail.com";
    $body = $name." : ".$email."\n\n".$message;
    if (mail($to, $subject, $body, "From: $email" );) {
        echo "Mesaj trimis cu succes.";
    } else {
        echo "Mesajul nu a fost trimis. Vă rugăm să încercați o altă metodă de contact.";
    }
}
?>
