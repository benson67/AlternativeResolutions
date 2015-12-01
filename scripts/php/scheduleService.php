<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/29/2015
 * Time: 11:52 AM
 */

session_start();
include 'connection.php';
$db = connect();

$service_id = $_POST['id'];

try {

    $query = $db->prepare("UPDATE `services` SET `scheduled`='1' WHERE service_id = '$service_id'");

    $query->execute();


} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}