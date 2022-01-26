<!DOCTYPE html>
<html lang="en">
    <head>
		<meta charset="UTF-8">
		<title> Plant World </title>
		<link rel="stylesheet" type = "text/css" href="css/adminstyle.css">
		<link rel="icon" type="image/png" href="https://appletreecustomsewing.com/wp-content/uploads/2015/05/custom-sewing-apple-favicon-red-04.png">


	</head>
	
	<body>
		<?php	
			include_once 'header.php';
		?>
		
		<div id = "content">
            <?php
                if (isset($_SESSION["useruid"]) && $_SESSION["useruid"] == "xyzqsrbo") {
                    echo "<h1> YOU ARE AN ADMIN </h1>";
                } else {
                    header("location: index.php");
                    exit();
                }
            ?>
		</div>
		
		<?php	
			include_once 'footer.php';
		?>
	</body>
</html>

