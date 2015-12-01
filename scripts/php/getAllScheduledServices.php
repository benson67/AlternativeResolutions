<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/28/2015
 * Time: 11:49 AM
 */

session_start();
include 'connection.php';
$db = connect();

$id = $_SESSION['username'];

try {

    $query = $db->prepare("SELECT * FROM services WHERE user_id = '$id' AND scheduled = '1'");

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