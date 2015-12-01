<?php
/**
 * Created by PhpStorm.
 * User: petert77
 * Date: 11/27/15
 * Time: 8:56 AM
 */

session_start();

if (isset($_SESSION['username']))
{
    echo $_SESSION['username'];
}
else
{
    echo "out";
}
