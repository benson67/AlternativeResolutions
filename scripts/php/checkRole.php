<?php
/**
 * Created by PhpStorm.
 * User: ShouldNotBe
 * Date: 11/29/2015
 * Time: 11:06 AM
 */

session_start();

if (isset($_SESSION['type']))
{
    echo $_SESSION['type'];
}
else
{
    echo "invalid";
}
