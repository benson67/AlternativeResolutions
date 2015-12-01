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
$type = $_POST['type'];
$subtype = $_POST['subtype'];
$date = $_POST['date'];
$duration = $_POST['duration'];
$location = $_POST['location'];

try {

    $query = $db->prepare("INSERT INTO services (`user_id`, `type`, `subtype`, `startDate`,`duration`, `fee`, `location`, `scheduled`) VALUES ('$user_id', '$type', '$subtype', '$date', '$duration', '0', '$location', '0');");

    $query->execute(array());

} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}
