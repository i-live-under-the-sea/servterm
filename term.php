<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="public/more.css">
	<link rel="stylesheet" href="public/main.css">
	<title>Terminal</title>
	<style>
		.fa-terminal:before{
			color: white;
			font-family: ubuntu;
    		content: "<?php echo $_SERVER['HTTP_HOST'].":"; ?>";
		}
	</style>
</head>
<body>
	<main id="container">
		<div id="terminal">
		<section id="terminal__bar">          
			<div id="bar__buttons">            
				<button class="bar__button" id="bar__button--exit">&#10005;</button>            
				<button class="bar__button">&#9472;</button>                
				<button class="bar__button">&#9723;</button>          
			</div>          
			<p id="bar__user"><?php echo $_SERVER['HTTP_HOST']; ?></p>        
		</section>
		<section id="terminal__body">
			<textarea type="text" id="setter"></textarea>
			<div style="color: white;" id="getter">
				<i class="fa fa-terminal" aria-hidden="true"></i><span style="color: #4878c0;">~</span><span style="color: white;">$ </span><span id="writer"></span><b class="cursor" id="cursor">B</b>
			</div>
		</section>
		</div>
	</main>
    <script src="public/main.js"></script>
</body>
</html>