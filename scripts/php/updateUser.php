<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/28/2015
 * Time: 3:58 PM
 */

session_start();
include 'connection.php';
$db = connect();

$username = $_SESSION['username'];
$newname = $_POST['prefname'];



try {

        $query = $db->prepare("UPDATE `users` SET `name`='$newname' WHERE id = '$username'");
        $query->execute();

} catch(PDOException $ex) {
    echo "error";
}
