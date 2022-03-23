//Constant changing header
var quotes = [
			 "The future is now, old man!", 
			 "The Mouse Always Wins.",
			 "One does not simply walk in to...",
			 "Get in loser we're going shopping!"
			 ];

var authors = [
				"Dewey Malcom from Malcolm in the Middle", 
				"Walt Disney", 
				"Eddard Stark", 
				"Regina George"
			  ];

//Getting the quotes
var x = document.querySelector("#quotes");

//Getting the people or person who said that quote
var y = document.querySelector("#authors")

//Get the length of the current array
var length = quotes.length;
var randInt = 0;	//For changing quotes/authors
var sleepTime = 0;	//For Enjoying and respecting the peace

//Random number generator (Python > JS)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//Python sleep() == this func.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Constant Rotation
async function polychange() {
    while(true){
		var dDip = randInt;
		randInt = getRandomInt(0, length);

		//Want to prevent the repeat of quotes consecutively.
		while(dDip == randInt){
			randInt = getRandomInt(0, length);
		}

		//Create or change the quotes
		x.textContent = quotes[randInt];
		y.textContent = "-" + authors[randInt];

		sleepTime = getRandomInt(2, 4);
        await sleep(sleepTime * 1000);
    }
}

polychange();

