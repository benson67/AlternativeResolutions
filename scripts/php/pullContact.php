<?php
session_start();
include 'connection.php';
$db = connect();


if (isset($_SESSION['contact']) && $_SESSION['contact'] != -1)
{

    $contact = $_SESSION['contact'];
    try {

        $query = $db->prepare("SELECT * FROM `contact` WHERE contact_id = '$contact'");

        $query->execute();

        $row = $query->fetch(PDO::FETCH_ASSOC);

    } catch(PDOException $ex) {
        echo "error";
    }

    if ($row)
    {
        echo json_encode($row);
    }
    else
    {
        echo "error-nocontact";
    }
}
else
{
    echo "error";
}




