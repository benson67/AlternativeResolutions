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

$service_id = $_POST['service_id'];


try {

    $query = $db->prepare("DELETE FROM services WHERE service_id = '$service_id'");

    $query->execute(array());

} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}
