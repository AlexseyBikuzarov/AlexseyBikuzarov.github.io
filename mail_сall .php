<?php
$recepient = "bikuzarov2013@ya.ru";
$sitename = "Лэндинг СЕО";

$name = trim($_POST["name"]);
$surname = trim($_POST["surname"]);
$email = trim($_POST["email"]);
$comments = trim($_POST["comments"]);


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nФамилия: $surname \nE-Mail: $email \nТекст: $comments";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");