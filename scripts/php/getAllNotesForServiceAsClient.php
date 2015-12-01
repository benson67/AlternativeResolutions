<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/30/2015
 * Time: 9:44 AM
 */

session_start();
include 'connection.php';
$db = connect();

$service_id = $_SESSION['service'];


try {

    $query = $db->prepare("SELECT note_id, user_id, note, users.name as user_name FROM serviceNotes, users WHERE service_id = '$service_id' AND id = user_id AND staffOnly = '0'");

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