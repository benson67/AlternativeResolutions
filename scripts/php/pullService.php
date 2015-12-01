<?php
/**
 * Created by PhpStorm.
 * User: petert77
 * Date: 11/27/15
 * Time: 2:13 PM
 */

session_start();
include 'connection.php';
$db = connect();


if (isset($_SESSION['service']) && $_SESSION['service'] != -1)
{

    $service = $_SESSION['service'];
    try {

        $query = $db->prepare("SELECT * FROM `services` WHERE service_id = '$service'");

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
        echo $_SESSION['service'];
    }
}
else
{
    echo "error";
}




