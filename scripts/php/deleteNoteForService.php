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

$note_id = $_POST['id'];


try {

    $query = $db->prepare("DELETE FROM serviceNotes WHERE note_id = '$note_id'");

    $query->execute();


} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}
