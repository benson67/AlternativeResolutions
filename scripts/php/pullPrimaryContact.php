<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/28/2015
 * Time: 11:45 AM
 */

session_start();
include 'connection.php';
$db = connect();

$username = $_SESSION['username'];

try {

    $query = $db->prepare("SELECT * FROM `contact` WHERE user_id = '$username' AND contact.primary = '1'");

    $query->execute();

    $row = $query->fetch(PDO::FETCH_ASSOC);

    if ($row)
    {
        echo json_encode($row);
    }
    else
    {
        echo "error-nocontact";
    }

} catch(PDOException $ex) {
    echo "error";
}







