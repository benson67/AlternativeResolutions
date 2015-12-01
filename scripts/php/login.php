<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/16/2015
 * Time: 5:50 PM
 */

include 'connection.php';
$db = connect();

$id = $_POST['id'];
$password = $_POST['password'];

session_start();

try {

    $query = $db->prepare("SELECT id, name, type FROM users WHERE id = '$id' AND password = '$password'");

    $query->execute(array());

    $row = $query->fetch(PDO::FETCH_ASSOC);




} catch(PDOException $ex) {
    echo "error";
}

if ($row) {

    $_SESSION['username'] = $row['id'];
    $_SESSION['type'] = $row['type'];
    echo($row['type']);
}
else {
    echo "error";
}