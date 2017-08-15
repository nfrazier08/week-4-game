//Get the page started!
$(document).ready(function(){
	//Computer select random number between 19 and 120
		//math.floor(math.random() * (max-min +1)) + min
		//Random Integer between specified values-inclusive at both ends
			var computerChoice = Math.floor(Math.random() * (120-19 +1)) + 19
		//append it to the randomNumBox div
			$("#randomNumBox").html(computerChoice)
			console.log("This is computerChoice " + computerChoice);

	//Set up randomly chosen numbers for each gem
		//math.floor(math.random() * (max-min + 1)) + min
		//Random integer between specified values-inclusive at both ends
		//This number is hidden from the player
			var greenGem = Math.floor(Math.random() * (12-1+1)) +1
			var purpleGem = Math.floor(Math.random() * (12-1+1)) +1
			var redGem = Math.floor(Math.random() * (12-1+1)) +1
			var blueGem = Math.floor(Math.random() * (12-1+1)) +1

	//Set up counter variables to keep track of the win/lose/final score
			var win = 0;//This will appear in winLoseBox
			var lose = 0;//Thiswill appear in the winLoseBox
			var finalScore = 0; //This will appear in the scoreBox
		//append win/lose variables to the winLoseBox
			$(".win").html(win)
			$(".lose").html(lose)
		//append final score to the scorebox
			$(".scoreBox").html(finalScore)

	//Set up your win/lose alerts
		//This was originally located inside of the reset function
		//You are testing to see if this location changes if they are hidden or not
			$(".winMessage").hide();
			$(".loseMessage").hide();

	//Set up RESET FUNCTION --At the start of each game!!!
			function reset (){
			//Computer will choose a new random number between 19-120
				var computerChoice = Math.floor(Math.random() * (120-19 +1)) + 19
			//Computer choice will be displayed in the RandomNumBox
				$("#randomNumBox").html(computerChoice)
			//Each gem will select a random number between 1-12
				var greenGem = Math.floor(Math.random() * (12-1+1)) +1
				var purpleGem = Math.floor(Math.random() * (12-1+1)) +1
				var redGem = Math.floor(Math.random() * (12-1+1)) +1
				var blueGem = Math.floor(Math.random() * (12-1+1)) +1
			//Final total will be 0 
				finalScore = 0;
			//Final total will be displayed in the scoreBox
				$(".scoreBox").html(finalScore);
			//Maybe take this out- you are testing to see if the win/lose alerts will pop up
			//Adding these in here makes the score change in the score box
				//append win/lose variables to the winLoseBox
					$(".win").html(win)
					$(".lose").html(lose)
				//append final score to the scorebox
					$(".scoreBox").html(finalScore)
			} //the end of the reset function!!!!!!!!!!!!!
					
	//Set up a function for when the player wins
			function winGame() {
		//The win score will go up one point
				win++
		//Display the 'You Win!' message to the player
				$(".winMessage").show();
		//Call the reset function to start the game over again
				reset ();
			}

	//Set up a function for when the player looses
			function loseGame() {
		//The loose score will go up one point
				lose++
		//Display the 'You Lose!' message to the player
				$(".loseMessage").show();
		//Call the reset function to start the game over again
				reset();
			}

	//Set up click functions for gems
	//User clicks on a gem(This needs to occur for each of the four gems):
	//GREEN GEM
			$("#greenGem").on('click', function() {
		//Number assigned to the gem will be added to the final score
				finalScore = finalScore + greenGem
		//Final Score will be displayed in the scoreBox
				$(".scoreBox").html(finalScore);
		//Set up conditions for winning or loosing
				if(finalScore===computerChoice){
					//call win function
						winGame();
				} else if (finalScore > computerChoice) {
					//call the lose function
						loseGame();
				}
			})

	//PURPLE GEM
			$("#purpleGem").on('click', function() {
		//Number assigned to the gem will be added to the final score
				finalScore = finalScore + purpleGem
		//Final Score will be displayed in the scoreBox
				$(".scoreBox").html(finalScore);
		//Set up conditions for winning or loosing
				if(finalScore===computerChoice){
					//call win function
						winGame();
				} else if (finalScore > computerChoice) {
					//call the lose function
						loseGame();
				}
			})

	//RED GEM
			$("#redGem").on('click', function() {
		//Number assigned to the gem will be added to the final score
				finalScore = finalScore + redGem
		//Final Score will be displayed in the scoreBox
				$(".scoreBox").html(finalScore);
		//Set up conditions for winning or loosing
				if(finalScore===computerChoice){
					//call win function
						winGame();
				} else if (finalScore > computerChoice) {
					//call the lose function
						loseGame();
				}
			})

	//BLUE GEM
			$("#blueGem").on('click', function() {
		//Number assigned to the gem will be added to the final score
				finalScore = finalScore + blueGem
		//Final Score will be displayed in the scoreBox
				$(".scoreBox").html(finalScore);
		//Set up conditions for winning or loosing
				if(finalScore===computerChoice){
					//call win function
						winGame();
				} else if (finalScore > computerChoice) {
					//call the lose function
						loseGame();
				}
			})

	




		console.log("This is greenGem " + greenGem);
		console.log("This is purpleGem " + purpleGem);
		console.log("This is redGem " + redGem);
		console.log("This is blueGem " + blueGem);

}) //this is the end of the document.ready function








