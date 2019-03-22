/*
DONE: - Goal of game is to click each of the 4 crytals in order to hit the Magic Number
DONE: - Single number given randomly (aka Magic Number)
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

    // random numbers via min/max
    function randomNums(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + 1);
    }

    // get magic number
    var magicNum = randomNums(1,70);
    $("#magicNum").text(magicNum);

    // get crystal values via random numbers
    var blackCrystal = randomNums(3,20);
    var purpleCrystal = randomNums(3,20);
    var greenCrystal = randomNums(3,20);
    var redCrystal = randomNums(3,20);


    // reset vars
    function reset() {
        score = 0;
        $(score).text(magicNum);
        playerScore = 0;
        blackCrystal = randomNums(3,20);
        purpleCrystal = randomNums(3,20);
        greenCrystal = randomNums(3,20);
        redCrystal = randomNums(3,20);
    }

    // set on click events
    $("#blackCrystal").on("click", function () {
        score += blackCrystal;
        winsLosses();
        $("#playerScore").text(score);
    });

    $("#purpleCrystal").on("click", function () {
        score += purpleCrystal;
        winsLosses();
        $("#playerScore").text(score);
    });

    $("#greenCrystal").on("click", function () {
        score += greenCrystal;
        winsLosses();
        $("#playerScore").text(score);
    });

    $("#redCrystal").on("click", function () {
        score += redCrystal;
        winsLosses();
        $("#playerScore").text(score);
    });

    // Set wins/losses function
    function winsLosses() {
        if (score === magicNum) {
            wins++;
            console.log("you won");
            alert("Congrats on the win!!");
            $("#wins").text(wins);
            reset();
        } else if (score > magicNum) {
            losses++;
            console.log("you lost");
            alert("My condolences on your loss.");
            $("#losses").text(losses);
            reset();
        }
    }
});