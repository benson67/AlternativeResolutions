<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/28/2015
 * Time: 3:05 PM
 */

session_start();
include 'connection.php';
$db = connect();

$id = $_POST['id'];

try {

    $query = $db->prepare("DELETE FROM `users` WHERE id = '$id'");

    $query->execute(array());

} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}