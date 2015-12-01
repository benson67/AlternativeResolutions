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
$content = $_POST['content'];
$private = $_POST['private']; // 1 for private to admin, 0 for not.


try {

    $query = $db->prepare("INSERT INTO clientNotes( `note_id` , `user_id` , `note` , `staffOnly` )VALUES (NULL , '$id', '$content', '$private')");

    $query->execute(array());

    $row = $query->fetchAll(PDO::FETCH_ASSOC);

} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}
