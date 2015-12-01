<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/29/2015
 * Time: 12:07 PM
 */

session_start();
include 'connection.php';
$db = connect();

$service_id = $_SESSION['service'];
$type = $_POST['type'];
$subtype = $_POST['subtype'];
$date = $_POST['date'];
$duration = $_POST['duration'];
$location = $_POST['location'];
$fee = $_POST['fee'];

try {

    $query = $db->prepare("UPDATE `services` SET `type`='$type',`subtype`='$subtype',`startDate`='$date',`duration`='$duration',`location`='$location', `fee` = '$fee' WHERE service_id = '$service_id'");

    $query->execute();

    unset($_SESSION['service']);


} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}