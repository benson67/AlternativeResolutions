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

$id = $_SESSION['username'];

try {

    $query = $db->prepare("SELECT * FROM contact WHERE user_id = '$id' ORDER BY contact.primary DESC");

    $query->execute(array());

    $row = $query->fetchAll(PDO::FETCH_ASSOC);


    if ($row) {
        echo json_encode($row);
    }
    else {
        echo "error";
    }

} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}

