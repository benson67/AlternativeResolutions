<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/16/2015
 * Time: 5:50 PM
 */
session_start();
include 'connection.php';
$db = connect();

$user_id = $_SESSION['username'];
$contactName = $_POST['contactName'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$email = $_POST['email'];


try {

    $query = $db->prepare("INSERT INTO contact ( `user_id`, `primary`, `name`, `address`, `phone`, `email`) VALUES ('$user_id', '0', '$contactName', '$address', '$phone', '$email');");

    $query->execute(array());


} catch(PDOException $ex) {
    echo "error";
}
