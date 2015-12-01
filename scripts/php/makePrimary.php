<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/29/2015
 * Time: 10:29 AM
 */

session_start();
include 'connection.php';
$db = connect();

$contact_id = $_POST['id'];
$user_id = $_SESSION['username'];

try {

    $query = $db->prepare("UPDATE `contact` SET `primary`='0' WHERE user_id = '$user_id'");

    $query->execute();

    $query = $db->prepare("UPDATE `contact` SET `primary`='1' WHERE contact_id = '$contact_id'");

    $query->execute();

    echo "ok";


} catch(PDOException $ex) {
    echo "error";
}
