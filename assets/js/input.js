// This script Simulates some live poll input

// helper function to genarate random number in between min-max
function randombetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// helper function to shuffle array
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Algorithm to simulate poll

/*
// create inicial random dataset
var votes = [0, 0, 0, 0];
var dataset = [0, 0, 0, 0];
var dataSize = 4;
var voteRate = 10;

// Algorithm to simulate the further voting process
var updateData = function() {

  var total = 0;
  dataset = [0, 0, 0, 0];

  // add random amount of votes
  for (i = 0; i < dataSize; i++) {
    var randomVotes = randombetween(0, voteRate);
    votes[i] += randomVotes;
    total += votes[i];
  }

  // calculate percentages
  for (i = 0; i < dataSize; i++) {
    dataset[i] = votes[i] / total * 100;
  }

  voteRate *= 1.2;

	drawVis();
	$(".chart-container").fadeIn("slow");
	setTimeout(function(){
		$("svg").fadeIn("slow");
	}, 1000);
};
*/
var dataset = [];
var max = 100;
var a = randombetween(0, max);
var b = randombetween(0, max - a);
var c = randombetween(0, max - a - b);
var d = max - a - b - c;
dataset.push(a, b, c, d);
//console.log(dataset);

// helper function too simulate live data
var updateData = function() {
    dataset = [];

		a = randombetween(0, max);
    b = randombetween(0, max - a);
    c = randombetween(0, max - a - b);
    d = max - a - b - c;
    dataset.push(a, b, c, d);
    shuffle(dataset);
    //console.log(dataset);


    drawVis();
    $(".chart-container").fadeIn("slow");
		setTimeout(function(){
			$("svg").fadeIn("slow");
		}, 1000);
};

// simullate live data input
var update = setInterval(updateData, 1750);
