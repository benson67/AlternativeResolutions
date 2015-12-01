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

$id = $_POST['id'];



try {

    $query = $db->prepare("SELECT * FROM clientNotes WHERE user_id = '$id'");

    $query->execute(array());

    $row = $query->fetchAll(PDO::FETCH_ASSOC);

} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}

//  Get the "result set" from a query as a "PDO object" that returns FALSE if
//  nothing satisfies the query.  Even better, it lets you iterate through the
//  result set using associative-array-like syntax, where the key is a column
//  in the table.
if ($row) {
    echo json_encode($row);
}
else {
    echo "error";
}