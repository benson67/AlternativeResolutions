<?php
/**
 * Created by PhpStorm.
 * User: petert77
 * Date: 11/27/15
 * Time: 11:59 AM
 */

session_start();
include 'connection.php';
$db = connect();

$service = $_POST['id'];


try {

    $query = $db->prepare("SELECT * FROM `subTypes` WHERE `service_id` = '$service'");

    $query->execute();

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