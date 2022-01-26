<!DOCTYPE html>
<html lang="en">
  <head>
		<meta charset="UTF-8">
		<title> Art Gallery </title>
		<link rel="stylesheet" type="text/css" href="css/gallerystyle.css"> 
    <link rel="icon" type="image/png" href="https://appletreecustomsewing.com/wp-content/uploads/2015/05/custom-sewing-apple-favicon-red-04.png">
    
	</head>
	
	<body>
     <?php	
			include_once 'header.php';
		?>
    
		<div id = "content">
			<hr style="width: 50%;">
			<h1 style="text-align: center; color: white; margin: 0px;">Art Gallery</h1>
			<hr style="width: 50%; ">

			<div class="buttons"> 
                <div id="fprevious-button"> &#x2b05;</div>
                <img id="fphoto" >
                <div id="fnext-button" class="navigation-button">&#x2b05;</div>
			</div>
			   <div id="des">
				   <hr style="width: 50%;">
				   <h2 id="pWords"style="text-align: center; color: black; margin: 0px;"></h2>
				   <hr style="width: 50%;">
			   </div>
            

    </div>
    <script src="js/galleryScript.js" type = "text/javascript"></script>
		
		<?php	
			include_once 'footer.php';
		?>
	</body>
</html>
		