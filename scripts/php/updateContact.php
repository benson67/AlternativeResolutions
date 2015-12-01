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

$contact_id = $_SESSION['contact'];
$contactName = $_POST['contactName'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$email = $_POST['email'];


try {

    $query = $db->prepare("UPDATE `contact` SET `name`='$contactName',`address`='$address',`phone`='$phone',`email`='$email' WHERE contact_id = '$contact_id'");

    $query->execute();

    echo "ok";

    $_SESSION['contact'] = -1;
    unset($_SESSION['contact']);

} catch(PDOException $ex) {
    echo "error";
}
