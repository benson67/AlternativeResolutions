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
$type = $_POST['type'];
$subtype = $_POST['subtype'];
$date = $_POST['date'];
$duration = $_POST['duration'];
$location = $_POST['location'];

try {

    $query = $db->prepare("UPDATE `services` SET `type`='$type',`subtype`='$subtype',`startDate`='$date',`duration`='$duration',`location`='$location' WHERE service_id = '$service_id'");

    $query->execute();


} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}
