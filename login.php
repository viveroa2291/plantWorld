<!DOCTYPE html>
<html lang="en">
    <head>
		<meta charset="UTF-8">
		<title> Plant World </title>
		<link rel="stylesheet" type = "text/css" href="css/signinstyle.css">
		<link rel="icon" type="image/png" href="https://appletreecustomsewing.com/wp-content/uploads/2015/05/custom-sewing-apple-favicon-red-04.png">


	</head>
	
	

	<body>
		<?php	
			include_once 'header.php';
		?>
		
		<div id = "content">
			<form class ="" action = "includes/login.inc.php" method = "post">
                <div class = "container">
                    <label for = "">Member login</label>
                    <input type = "text" name = "uid" placeholder = "username" value ="">
                    <input type = "password" name = "pwd" placeholder = "password" value ="">
                    <button type = "submit" class ="btn" name = "submit">Login</button>
                </div>
			</form>
			
			<?php 
            if (isset($_GET["error"])) {
                if ($_GET["error"] == "emptyinput") {
                    echo "<script>alert('Fill in all fields!')</script>";
                } else if ($_GET["error"] == "wronglogin") {
                    echo "<script>alert('Incorrect login information')</script>";
                } 
            }
            ?>
		</div>
		
		<?php	
			include_once 'footer.php';
		?>
	</body>
</html>