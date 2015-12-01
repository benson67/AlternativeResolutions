<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/16/2015
 * Time: 5:51 PM
 */
session_start();
function connect()
{
    $db_hostname = 'localhost';
    $db_database = 'petert77';
    $db_username = 'petert77';
    $db_password = 'p465778';


// Connect to the DB

    $db = new PDO("mysql:dbname=" . $db_database . ";host=localhost", $db_username, $db_password);

// One of the big advantages of PDO objects is that they support
// exception handling
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//use an SQL prepared statement to get results

    return $db;
}

