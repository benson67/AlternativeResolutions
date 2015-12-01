<?php
/**
 * Created by PhpStorm.
 * User: petert77
 * Date: 11/27/15
 * Time: 1:47 PM
 */

session_start();
include 'connection.php';
$db = connect();

$id = $_SESSION['username'];

try {

    $query = $db->prepare("SELECT * FROM services WHERE user_id = '$id' AND scheduled = '0'");

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