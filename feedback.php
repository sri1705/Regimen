<?php
$host="localhost";
$username="root";
$password="";
$dbname="feedback_day";

$conn=mysqli_connect($host,$username,$password,$dbname);
if($conn)
{
    //echo "Connection Okay";
}
else
{
    echo "Connection Failed".mysqli_connect_error();
}
?>