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

$service_id = $_POST['id'];



try {

    $query = $db->prepare("SELECT * FROM serviceNotes WHERE service_id = '$service_id'");

    $query->execute(array());

    $row = $query->fetchAll(PDO::FETCH_ASSOC);

} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}

if ($row) {
    echo json_encode($row);
}
else {
    echo "error";
}