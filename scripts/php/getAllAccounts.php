<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/28/2015
 * Time: 3:04 PM
 */

session_start();
include 'connection.php';
$db = connect();

try {

    $query = $db->prepare("SELECT id, type FROM users");

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