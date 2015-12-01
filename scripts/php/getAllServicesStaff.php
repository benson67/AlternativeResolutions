<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/29/2015
 * Time: 11:31 AM
 */

session_start();
include 'connection.php';
$db = connect();

try {

    $query = $db->prepare("SELECT users.name as name,services.service_id as service_id,  services.type as type, services.subtype as subtype, services.startDate as startDate, services.duration as duration, services.fee as fee, services.location as location FROM services, users WHERE scheduled = '0' AND id = user_id");

    $query->execute(array());

    $row = $query->fetchAll(PDO::FETCH_ASSOC);


    if ($row) {
        echo json_encode($row);
    }
    else {
        echo "error";
    }

} catch(PDOException $ex) {
    echo "An Error occured!";
    echo $ex->getMessage();
}