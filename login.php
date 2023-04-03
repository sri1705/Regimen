<?php
session_start();
include("connection.php");
include("functions.php");

if($_SERVER['REQUEST_METHOD']== "POST"){
    $user_name=$_POST['user_name'];
    $password=$_POST['password'];

    if(!empty($user_name)&& !empty($password) && !is_numeric($user_name)){

        $query = "select * from usr where user_name = '$user_name' limit 1";
        $result = mysqli_query($con, $query);
        if($result){
            if($result && mysqli_num_rows($result)>0){
                $user_data = mysqli_fetch_assoc($result);
                if($user_data['password']===$password){
                    $_SESSION['user_id']=$user_data['user_id'];
                    header("Location: index.php");
                        die;
                }
            }
        }
        echo "Wrong username or password!";

    }else{
        echo "Wrong username or password!";
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Home</title>
        <link rel="stylesheet" href="login.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        
        <div class="container">
            <div class="form-box">
                <img src="close.png" alt="close" class="close">
                <div class="button-box">
                    <div id="btn"></div>  
                    <button type="button" class="toggle-btn" onclick="signin()"> Sign In</button>
                    <button type="button" class="toggle-btn" onclick="signup()"> Sign Up</button>
                </div>
                
                <form class="login-form" id="signup">
                    <input type="text" name="name" class="form-field" placeholder="Username" required>
                    <input type="email" name="email" class="form-field" placeholder="Email Address" required>
                    <input type="password" name="pass" class="form-field" placeholder="Password" required>
                    <button type="submit" class="submit">Sign Up</button>
                </form>
                <form method="post" class="login-form" id="signin">
                    <input type="text" name="user_name" class="form-field" placeholder="Username" required>
                    <input type="password" name="password" class="form-field" placeholder="Password" required>
                    <input type="checkbox" name="check" class="checkbox"><span>Remember Password</span> 
                    <button type="submit" name="" class="submit">Sign In</button>
                </form>
            </div>
</div>
    </body>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script type="text/javascript">
        document.getElementById("but").addEventListener("click", function(){
            document.querySelector(".container").style.display="flex";
        })

        document.querySelector(".close").addEventListener("click",function(){
            document.querySelector(".container").style.display="none";
        })   
        var x = document.getElementById("signin");
        var y = document.getElementById("signup");
        var z = document.getElementById("btn");

        function signup(){
            x.style.left="-400px";
            y.style.left="50px";
            z.style.left="110px";
        }
        function signin(){
            x.style.left="50px";
            y.style.left="450px";
            z.style.left="0px";
        }
    </script>
</html>