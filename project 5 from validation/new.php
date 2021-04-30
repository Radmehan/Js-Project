<?php
$host="localhost";
$user="root";
$password="";
$db="user";

mysql_connect($host,$user,$password);
$mysql_select_db($db);
if(isset($_POST['username'])){
	$uname=$_POST['username'];
	$password=$_POST['password'];
	
	$sql="select * from users where user='".$uname."'AND Pass='".$password."'limit 1';
	$result=mysql_query($sql);
	if(mysql_num_rows(($result)==1){
		echo " You have successfully logged in ";
		exit();
	}
	else {
		echo "you have enterd wrong";
		exit();
	}
}
?>

<!doctype html>
<html>
<head>
<title>LOg in Form</title>
</head>
<body>
<form method="$POST" action="#">
<div class ="form_input">
<input type ="text" name= "username" placeholder="Enter your user Name"/>
</div>
</div class="form_input">
<input type="password" name="password" placeholder="Enter your password"/>
</div>
<div>
<input type="submit" name ="submit" value="LOGIN" class="btn-login'/>
</form>
</div>
</body>
</html>