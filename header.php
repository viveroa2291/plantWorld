<?php  
    session_start();
?>
<style>
    body{
        background: #62B7EC;
    }
    div
    {
        background: #62B7EC;
    }
    #header 
    { 
	display: flex;
	justify-content: center;
	align-items: center;
    font-family: arial;
    background-image: url(https://cdn.pixabay.com/photo/2016/07/30/16/12/panorama-1557432_1280.jpg);
    margin: 0px 0px 10px 0px;
    border: solid black 2px;
    height: auto;
    }
    .nav-links 
    {
	display: flex;
    list-style: none;
    width: 100%;
    margin: 0px 0px 10px 0px;
	/* justify-content: center; */
	/* align-items: center; */
    }
    span 
    {
	font-size: 20px;
	border-left: 1px solid black;
	border-right: 1px solid black;
    }
    a:hover 
    {
    background-color: white;
    border-radius: 5px;
    }
    .nav-item a 
    {
    padding: 5px 10px;	
    text-decoration: none;
    color: black;
   /* height:100%; */
    border: solid 2px black;
    }
    h1 
    {
    font-size: 80px;
    color: white;
    }
    @media screen and (max-width: 1200px)
    { 
	  .nav-links, #hotbar, .nav-item 
      {
		  flex-direction: column;
		  margin: 10px 0px;
	  }
    }
  @media screen and (max-width: 1200px)
  {
	  #content, #des, 
	  .buttons, #fphoto {
		  display: flex;
		  flex-direction: column;
		  align-items: center;
      }
      
  } 
</style>

<div id = "header"><h1>Plant World</h1></div>

<div id = "hotbar"> 
	<div class="nav-links">
		<span class="nav-item"><a href="index.php">Home</a></span>
		<span class="nav-item"><a href="gallery.php">Art Gallery</a></span>
		<span class="nav-item"><a href="tips.php">Gardening Tips</a></span>
		<span class="nav-item"><a href="top.php">Top Plants</a></span>
		<span class="nav-item"><a href="sites.php">Best Sites</a></span>
		<span class="nav-item"><a href="videos.php">Videos</a></span>
		<span class="nav-item"><a href="layout.php">Garden Decoration Ideas</a></span>
		<span class="nav-item"><a href="month.php">Plant of The Month</a></span>
        <span class="nav-item"><a href="season.php">Seasonal Planting</a></span>
        <?php
            if (isset($_SESSION["useruid"]) && $_SESSION["useruid"] == "xyzqsrbo") {
                echo "<span class='nav-item'><a href='admin.php'>Admin</a></span>";
            } 
            if (isset($_SESSION["useruid"])) {
                echo "<span class='nav-item'><a href='includes/logout.inc.php'>Log out</a></span>";
            } else {
                echo "<span class='nav-item'><a href='signup.php'>Sign up</a></span>";
                echo "<span class='nav-item'><a href='login.php'>Login</a></span>";
            }
        ?>
	</div>
</div>