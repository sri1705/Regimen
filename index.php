<?php
session_start();
include("connection.php");
include("functions.php");
$user_data = check_login($con);
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Home</title>
        <link rel="stylesheet" href="home.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        <div class="container">
            <div class="navbar">
                <img src="./logo.png" class="logo">
                <nav>
                <label for="btn1" class="icon">
                    <i class="fa fa-bars"></i>
                </label>
                    <ul>
                        <li id="show" class="active" ><a href="home.html">Home</a></li>
                        <li id="show"><a href="schedule.html">Calendar</a></li>
                        <li id="show"><a href="index.html">Weather</a></li>
                        <li id="show"><a href="todolist.html">To Do List</a></li>
                        <li id="show"><a href="yourday.html">About  Your  Day</a></li>                     

                    </ul>

                </nav>
                <button class="login"><a href="login.php" class="but" id="but">Login</a></button>

            </div>
            <div class="content">
                <h1>Learn from your past and shut the door behind to live in present.</h1>
            </div>
        </div>
</body>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script type="text/javascript">
        $(document).on('click','ul li',function(){
            $(this).addClass('active').siblings().removeClass('active')
        })
        </script>
</html>
