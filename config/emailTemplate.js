const template = (name, body) => {
	return `<!DOCTYPE html>
	<html lang="en">
	
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<style>
			.main {
				background: #EFF2F3;
				padding: 50px;
			}
	
			.header {
				background: linear-gradient(45deg, #4892F9, #7F3FE1);
				padding: 20px 10px;
	
			}
	
			.header img {
				height: 50px;
			}
	
			.container {
				max-width: 600px;
				border-radius: 3px;
				overflow: hidden;
			}
	
			.content {
				background: white;
				padding: 20px;
				text-align: left;
				font-family: Arial, Helvetica, sans-serif;
				color: #575757;
				border-bottom: 1px solid #e0e0e0;
			}
	
			.info {
				padding: 20px 50px;
				max-width: 500px;
				font-family: Arial, Helvetica, sans-serif;
				font-size: 14px;
				color: #2b2b2b;
			}
			@media screen and (max-width: 600px) {
				.main {
					padding: 20px;
				}

				.info {
					max-width: 100%;
					padding: 20px 10px;
					font-size: 10px;
				}
			}
		</style>
	</head>
	
	<body>
		<div class="main">
			<center>
				<div class="container">
					<div class="header">
						<img src="https://devfluence.in/wp-content/uploads/2024/04/transparent-white.png" alt="">
					</div>
					<div class="content">
						${body}
					</div>
				</div>
				<div class="info">
					Contact us today to learn more about how Devfluence can help you achieve your business goals.
				</div>
			</center>
		</div>
	</body>
	
	</html>`
	// return `<!DOCTYPE html>
	// <html lang="en">

	// <head>
	// 	<meta charset="UTF-8">
	// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	// 	<title>Document</title>
	// 	<style>
	// 		* {
	// 			font-family: sans-serif;
	// 		}

	// 		.container,
	// 		body {
	// 			padding: 10px;
	// 			color: #02213A;
	// 		}

	// 		.container {
	// 			padding: 20px;
	// 			border-radius: 20px;
	// 			max-height: min-content;
	// 			background-color: #E2F0FE;
	// 			border: 1px solid #bfddfb;
	// 		}

	// 		.container p {
	// 			font-size: 15px;
	// 			line-height: 20px;
	// 			text-align: justify;
	// 		}

	// 		.mainLogo {
	// 			width: 50px;
	// 			margin-bottom: 20px;
	// 		}

	// 		.socials {
	// 			margin: 20px 0;
	// 			gap: 20px;
	// 		}

	// 		.socials a {
	// 			text-decoration: none;
	// 			color: #02213A;
	// 			margin: 0 10px;
	// 		}
	// 	</style>
	// </head>

	// <body>
	// 	<center class="container">
	// 		<img class="mainLogo" src="https://devfluence.in/wp-content/uploads/2024/03/transparent-df.png"
	// 			alt="DevFluence">
	// 		<p>${body}
	// 		</p>
	// 	</center>
	// 	<center class="socials">
	// 		<h3>${name} From DevFluence</h3>
	// 		<a href="https://www.devfluence.in">www.devfluence.in</a>
	// 		<a href="tel:+91 7861076104">+91 7861076104</a>
	// 	</center>
	// </body>

	// </html>`
}


module.exports = template