<?php
$recepient = "bikuzarov2013@ya.ru";
$sitename = "Детский магазин";
$name = trim($_POST["name"]);
$tel= trim($_POST["tel"]);
$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nНомер телефона: $tel";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");