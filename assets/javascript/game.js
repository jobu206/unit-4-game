/*
1. There will be four crystals displayed as buttons on the page.
    a. Each crystal has a random number assigned.

2. The player will be shown a random number at the start of the game.
    a. Target

3. When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
    a. On click for each individual ID

4. Your game will hide this amount until the player clicks a crystal.
    a. When they do click one, update the player's score counter.
    b. The player wins if their total score matches the random number from the beginning of the game.

5. The player loses if their score goes above the random number.
    a. Decrement score

6. The game restarts whenever the player wins or loses.
    a. When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

7. The app should show the number of games the player wins and loses.
    a. Button to reset game
*/

$(document).ready(function() {
    var magicNum;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var rubyNum;
    var diamondNum;
    var emeraldNum;

    function newNums() {
        magicNum = Math.floor(Math.random() * 125) + 50;
        rubyNum = Math.floor(Math.random() * 20) * 10;
        diamondNum = Math.floor(Math.random() * 20) * 10;
        emeraldNum = Math.floor(Math.random() * 20) * 10;
    }

});

