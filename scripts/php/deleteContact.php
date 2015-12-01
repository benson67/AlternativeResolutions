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

$contact_id = $_POST['id'];


try {

    $query = $db->prepare("DELETE FROM `contact` WHERE contact_id = '$contact_id'");

    $query->execute(array());

    echo "ok";

} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}
