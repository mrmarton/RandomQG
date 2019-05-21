// FSJS - Random Quote Generator
document.getElementById('loadQuote').addEventListener("click", printQuoteAndChangeBackgroundColor, false);
// Create the array of quote objects and name it quotes
var quotes = [
{
	quote: "My house is on fire... marshmallows!",
	source: "GREG GIRALDO",
	citation: "comedy club",
	year: 2009,
	tags: "humor",
},
{
	quote: "I don't think you cross the line - I think you move the line",
	source: "Jeff Ross",
	citation: "Roast",
	year: 2012,
	tags: "humor",
},
{
	quote: "My goal this weekend is to move... just enough so people don't think I'm dead. ",
	source: "Anonymous",
	citation: "internet",
	year: 2000,
	tags:"funny",
},
{
	quote: "If Cinderella's shoe fit perfectly, then why did it fall off?",
	source: "Anonymous", 
	citation: "internet",
	year: 2001,
	tags: "business",
},
{
	quote: "All our dreams can come true - if we have the courage to pursue them.",
	source: "Walt Disney",
	citation: "interview",
	tags: "life",
	year: "long time ago",
},
{
	quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
	source: "Eleanor Roosevelt",
	
	tags: "politics",
	year: 1946,
}
];



// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote ( ) {
  var upperLimit = quotes.length;
  console.log("upperLimit", upperLimit);
  var randNum = Math.floor(Math.random() * upperLimit);
  console.log("randNum", randNum);
  return quotes[randNum];
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
  var randQuote = getRandomQuote();
  console.log(randQuote);
  var message = '<p class="quote">' + randQuote.quote + '</p>';
  message += '<p class="source">' + randQuote.source;

  if (randQuote.citation && randQuote.year) {
    message += '<span class="citation"> ' + randQuote.citation + '</span>';
    message += '<span class="year"> ' + randQuote.year + '</span></p>';
    message += '<span class="tags"> ' + randQuote.tags + '</span></p>'
  } else if (randQuote.citation) {
    message += '<span class="citation"> ' + randQuote.citation + '</span></p>';
  } else if (randQuote.year) {
    message += '<span class="year"> ' + randQuote.year + '</span></p>';
    message += '<span class="tags"> ' + randQuote.tags + '</span></p>';
  }

  console.log(message);
  document.getElementById('quote-box').innerHTML = message;

}
// Change background colour
function printQuoteAndChangeBackgroundColor() {
  printQuote();
  var newBackgroundColor = "rgb(" + Math.floor(Math.random() * 256 + 1) + ", " + Math.floor(Math.random() * 256 + 1) + ", " + Math.floor(Math.random() * 256 + 1) + ")";
  console.log(newBackgroundColor);
  document.body.style.backgroundColor = newBackgroundColor;
  document.getElementById("loadQuote").style.background = newBackgroundColor;

}
printQuoteAndChangeBackgroundColor();


// This event listener will respond to "Show another quote" button clicks
function newQuote() {
  var quoteNew = window.setInterval(printQuoteAndChangeBackgroundColor, 30000);
}

newQuote();

// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);