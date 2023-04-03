<?php
session_start();
include("connection.php");
include("functions.php");

if($_SERVER['REQUEST_METHOD']== "POST"){
    $user_name=$_POST['name'];
    $email=$_POST['email'];
    $password=$_POST['pass'];

    if(!empty($user_name) && !empty($password) && !is_numeric($user_name)){

        $user_id=random_num(20);
        $query = "insert into user (user_id,username,password) values ($user_id,$username,$password)";
        mysqli_query($con,$query);
        header("Location: login.php");
        die;
    }else{
        echo "Please enter some valid information";
    }
}
?>