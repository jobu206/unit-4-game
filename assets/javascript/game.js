/*
TODO: - Goal of game is to click each of the 4 crytals in order to hit the Magic Number
TODO: - Single number give randomly (aka Magic Number)
TODO: - Every crystal needs to have a randomly generated number
TODO: - Each time a crystal is clicked we will add previous score to new score until number is either the same or goes over magic number.
TODO: - If number goes over magic number, we lose
    - decrement loss
TODO: - If number matches magic number, we win
    - increment wins
TODO: - Random number is generated each time player clicks new game button
    - start over
*/

$(document).ready(function () {
    // delcare variables
    var score = 0;
    var wins = 0;
    var losses = 0;
    var blackCrystal = Math.floor(Math.random() * 10 + 1);
    var purpleCrystal = Math.floor(Math.random() * 10 + 1);
    var greenCrystal = Math.floor(Math.random() * 10 + 1);
    var redCrystal = Math.floor(Math.random() * 10 + 1);

    // Set magic number and display
    var magicNum = Math.floor(Math.random() * 10 + 1);


    // function to set new game
	function newGame() {
		newNums();
		totalScore = 0;
		$("#magicNumber").text(magicNum);
		$("#totalScore").text(score);
		$("#blackCrystal").attr("crystalvalue", blackCrystal);
		$("#purpleCrystal").attr("crystalvalue", purpleCrystal);
		$("#greenCrystal").attr("crystalvalue", greenCrystal);
		$("#redCrystal").attr("crystalvalue", redCrystal);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");
    }

    // function for winning
    function youWon() {
        if (score === magicNum){
            win+=1;

        }
    }


    // function for losing

    
    // call new game again to reset game board
 

    // add values for score


    // conditionals for verifying 
});