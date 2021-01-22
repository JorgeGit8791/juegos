<?php
if (isset($_POST)){
  error_reporting(0);
  $name = $_POST["name"];
  $email = $_POST["email"]:
  $subject = $_POST["subjet"];
  $comments = $_POST["comments"];
  
  $domian = $_SERVER["HTTP_POST"];
  $to = "andresmontoya8791@gmail.com";
  $subject_mail = "Contacto desde el formulario del sito $domian: $subject";
  $message = "
  <p>
    Datos enviados desde el formulario del sitio <b>$domian</b>
  </p>
  <ul>
    <li>Nombre: <b>$name</b></li>
    <li>Email: <b>$email</b></li>
    <li>Asunto: $subject</li>
    <li>Comentarios: $comments</li>
  </ul>
  ";
  $headers = "MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n"."From: Envio Automatico No Responder <no-reply@$domian>";

  $send_mail = mail($to,$subject_mail,$message,$headers);

  if ($send_mail) {
    $res = [
      "err" => false,
      "message" => "Tus datos han sido enviados"
    ];
  } else {
    $res = [
      "err" => true,
      "message" => "Error al enviar tus datos. Intenta nuevamente"
    ];
  }

  header("Access-Control-Allow-Origin:*");
  // header("Access-Control-Allow-Origin:https://jamoWeb");
  header('Content-type: application/json');
  echo json_decode($res);
  exit
}