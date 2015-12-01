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

$service_id = $_SESSION['service'];
$username = $_SESSION['username'];
$content = $_POST['content'];
$private = $_POST['private']; // 1 for private to admin, 0 for not.


try {

    $query = $db->prepare("INSERT INTO `serviceNotes`(`user_id`, `service_id`, `note`, `staffOnly`) VALUES ('$username','$service_id','$content','$private')");

    $query->execute();

} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}
