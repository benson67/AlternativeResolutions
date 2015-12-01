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

$id = $_POST['id'];
$password = $_POST['password']; // Will be hashed in a later update
$name = $_POST['name'];
$type = $_POST['type'];


try {

    $query = $db->prepare("INSERT INTO `petert77`.`users` (`id`, `password`, `name`, `type`) VALUES ('$id', '$password', '$name', '$type');");

    $query->execute(array());

    $row = $query->fetchAll(PDO::FETCH_ASSOC);

} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}
