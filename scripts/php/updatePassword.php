<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/28/2015
 * Time: 3:49 PM
 */

session_start();
include 'connection.php';
$db = connect();

$username = $_SESSION['username'];
$password = $_POST['password'];
$newpassword = $_POST['newpassword'];



try {

    $query = $db->prepare("SELECT * FROM `users` WHERE id = '$username' AND password = '$password'");

    $query->execute();

    $row = $query->fetch(PDO::FETCH_ASSOC);

    if ($row)
    {
        $query = $db->prepare("UPDATE `users` SET `password`='$newpassword' WHERE id = '$username'");
        $query->execute();
    }

    else{
        echo "error";
    }

} catch(PDOException $ex) {
    echo "error";
}
