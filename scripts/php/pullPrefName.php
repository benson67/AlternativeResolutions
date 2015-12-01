<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/28/2015
 * Time: 4:16 PM
 */

session_start();
include 'connection.php';
$db = connect();

$username = $_SESSION['username'];

try {

    $query = $db->prepare("SELECT name FROM `users` WHERE id = '$username'");
    $query->execute();

    $row = $query->fetch(PDO::FETCH_ASSOC);

    if ($row)
    {
        echo json_encode($row);
    }
    else
    {
        echo "error";
    }

} catch(PDOException $ex) {
    echo "error";
}