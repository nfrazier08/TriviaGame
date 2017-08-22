//Get the page started
$(document).ready(function(){

//will hold the current question
// var currentQuestion = 0;
// //will hold the scores for the game
// 	//will be displayed at the end
// var answersCorrect = 0;
// var answersWrong = 0; 
// var unanswered = 0;
var myQuestions = [{
	question: "What are complementary colors?",
	choice1: "Two primary colors mixed together",
	choice2: "Two colors next to each other on the color wheel",
	choice3: "Two colors opposite each other on the color wheel",
	choice4: "Two colors mixed with white",
	answer: "3"
},{
	question:"What are analogous colors?",
	choice1: "Two colors mixed with black",
	choice2: "Two colors opposite each other on the color wheel",
	choice3: "Three colors next to each other on the color wheel",
	choice4: "Two complementary colors mixed togeher",
	answer: "3"
},{
	question: "What color can you add to another color to make it warmer?",
	choice1: "White",
	choice2: "Orange",
	choice3: "Yellow",
	choice4: "Red",
	answer: "4"
},{
	question: "What color can you add to another color to make it cooler?",
	choice1: "Black",
	choice2: "Blue",
	choice3: "Red",
	choice4: "Green",
	answer: "2"
},{
	question: "Who invented the circular color wheel?",
	choice1: "Issac Newton",
	choice2: "Wolfgang Goethe",
	choice3: "Paul Cezanne",
	choice4: "Gustav Klimt",
	answer: "1"
},{
	question: "Which do you add to tint a color?",
	choice1: "White",
	choice2: "Black",
	choice3: "Blue",
	choice4: "Gray",
	answer: "2"
},{
	question: "Which is NOT a primary color?",
	choice1: "Yellow",
	choice2: "Red",
	choice3: "Blue",
	choice4: "Orange",
	answer: "4"
},{
	question: "Which is NOT an example of a complementary color pair?",
	choice1: "Red and Red-Violet",
	choice2: "Red-Violet and Yellow-Green",
	choice3: "Yellow and Blue",
	choice4: "Red and Green",
	answer: "1"
},{
	question: "What are secondary colors?",
	choice1: "Two colors opposite each other on the color wheel?",
	choice2: "Two primary colors mixed together",
	choice3: "A tertiary color and a secondary color mixed together",
	choice4: "Two analogous colors mixed together",
	answer: "2"
},{
	question: "Which is NOT a secondary color?",
	choice1: "Violet",
	choice2: "Orange",
	choice3: "Blue",
	choice4: "Green",
	answer: "3"
},{
	question: "What is the value of a color?",
	choice1: "The lightness or darkness of a color",
	choice2: "The saturation of a color",
	choice3: "How well a color pairs with its complement",
	choice4: "Adding black to a color",
	answer: "1"
},{
	question: "Which IS tertiary color?",
	choice1: "Orange",
	choice2: "Green",
	choice3: "Yellow",
	choice4: "Blue-Violet",
	answer: "4"
},{
	question: "What are tertiary colors?",
	choice1: "Two analogous colors",
	choice2: "Two primary colors mixed together",
	choice3: "A color created from a primary and a secondary color",
	choice4: "A color with yellow added to it",
	answer: "3"
},{
	question: "What is a hue?",
	choice1: "A color with blue added to it",
	choice2: "The purest, brightest form of a color",
	choice3: "Two tertiary colors mixed together", 
	choice4: "Different intensities of a color",
	answer: "2"
},{
	question: "What is a monochromatic color scheme?",
	choice1: "Four colors evenly spaced around the color wheel",
	choice2: "A color scheme with two or more colors",
	choice3: "A color scheme with no color",
	choice4: "A color scheme with one color with shades, tints and tones",
	answer: "4"
},{
	question: "How can you change the intensity of a color?",
	choice1: "Add a tertiary color",
	choice2: "Add a primary color",
	choice3: "Add black to a color",
	choice4: "Add the complement of the color",
	answer: "4"
},{
	question: "Who authored Theory of Colors in 1810?",
	choice1: "Wolfgang Goethe",
	choice2: "John Murray",
	choice3: "Rudolf Steiner",
	choice4: "Louis Bertrand",
	answer: "1"
},{
	question: "Mixing of colored physical substances correspondes to:",
	choice1: "Additive Mixing",
	choice2: "Chroma Mixing",
	choice3: "Subtractive Mixing",
	choice4: "Color Mixing",
	answer: "Subtractive Mixing"
}];//End of myquestion object

var questionDisplay = $("#question");
var	playerChoice1 = $("#opt1");
var	playerChoice2 = $("#opt2");
var	playerChoice3 = $("#opt3");
var	playerChoice4 = $("#opt4");
var counter = 30;

//Hide the HideShow question container of the questions
$(".hideShow").hide();

//Write function for when the start button is clicke the 
	//container showing questions will show and start button will hide
$("#startButton").on('click',function(){
	$(".hideShow").show();

})





//Timer
var timer = $("#myTimer");
timer.html(30)

function countDown(){
	counter--;
	timer.html(counter);
	if(counter===0){
		clearInterval(interval)
	}
}
	
var interval = setInterval(countDown, 1000);









})








//End of doc write
	




