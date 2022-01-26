<!DOCTYPE html>
<html lang="en">
    <head>
		<meta charset="UTF-8">
		<title> Home Page </title>
		<link rel="stylesheet" type = "text/css" href="css/indexstyle.css">
		<link rel="icon" type="image/png" href="https://appletreecustomsewing.com/wp-content/uploads/2015/05/custom-sewing-apple-favicon-red-04.png">
	</head>
	
	<body>
        <?php	
			include_once 'header.php';
		?>
	<div class="container">
		
		<div id = "sidebar">
				<hr style="width: 95%;">	
			<h1 id = "heading" align="center">Gardening from other sites: </h1>
			<hr style="width: 95%;">
			<li class="space"><a class="sites" href = "https://www.countryliving.com/gardening/garden-ideas/advice/g746/garden-plans/" target = "_blank" style="text-decoration: none; color: black;">Top 20 garden designs</a></li>
			<li class="space"><a class="sites" href = "https://www.gardendesign.com/trends/2020.html" target = "_blank">Gardening Trends for 2020</a></li>
			<li class="space"><a class="sites" href = "https://morningchores.com/fruits-to-grow-in-containers/" target = "_blank">Fruits and berries for a Container Garden</a></li>
			<li class="space"><a class="sites" href = "https://www.miraclegro.com/en-us/library/gardening-basics/10-top-gardening-tips-beginners" target = "_blank">Gardening Tips for Beginners</a></li>
			<li class="space"><a class="sites" href = "https://www.ruralsprout.com/indoor-fruit-trees/" target = "_blank">Fruit to grow Indoors</a></li>
			<li class="space"><a class="sites" href = "https://www.countryliving.com/uk/homes-interiors/gardens/a20120884/most-cost-effective-vegetables-grow-home-garden/" target = "_blank">Cost-effective vegetables to grow</a></li>
		</div>
		<div id="content">
			<hr style="width: 75%;">
			<p id = "about" align="center"> About Us </p>
			<hr style="width: 75%;">
            <?php
                if (isset($_SESSION["useruid"])) {
                    echo "<p id = 'about2'> Welcome to the site " . $_SESSION["useruid"] . "</p>";
                } 
            ?>
			<p id = "about2" align="center">Plant World is a website dedicated to everything plant or garden related. Find everything from gardening techniques to descriptions of different fruits or vegetibles. Not only do we have our own articles we also provide links to external sites to get a wider variety of plant based information.</p>
			<img src = "https://www.thespruce.com/thmb/5xfqUrWlkIaY1VY1mdTQj_Rhz50=/2121x1193/smart/filters:no_upscale()/backyard-garden-1134353350-e96a4663e9c4437dadeeff1954d8cedf.jpg" alt = "garden">
			<p id = "about3" align="center">See many great garden designs like the one above! Become a master at the art of gardening today. One of the best parts of the site is to see what plants are currently in season!</p>
		</div>

	</div>
		<?php	
			include_once 'footer.php';
		?>
	</body>
</html>

