//Get the page started
$(document).ready(function(){

//Timer
//set global variable
var counter = 30; //I want it to start at 30 seconds

function timerSetup(){
	//Accessing the html element with javascript
	var timer = $("#myTimer");
	$("#myTimer").html(counter);

	//Every second decrease interval
	//I want the function countDown to happen 
		//every 1000 millisecond(1 second)
	var interval = setInterval(countDown, 1000);

	function countDown(){
		counter--;
		$("#myTimer").html(counter);
		if(counter===0){
			clearInterval(interval)
		}
	}	
	countDown();
}
timerSetup();

// //Questions
// //Creating an object with my questions
// var questions = [{
// 	question: "What are complementary colors?"
// 	choices: [	"Two primary colors mixed together",
// 				"Two colors next to each other on the color wheel",
// 				"Two colors opposite each other on the color wheel",
// 				"Two colors mixed with white"]
// 	answer: "2"
// },{
// 	question: "What are analogous colors?"
// 	choices: [	"Two colors mixed with black",
// 				"Two colors opposite each other on the color wheel",
// 				"Three colors next to each other on the color wheel",
// 				"Two complementary colors mixed together"]
// 	answer: "2"
// },{
// 	question: "What color can you add to make a color warmer?"
// 	choices: [	"White",
// 				"Orange",
// 				"Yellow",
// 				"Red"]
// 	answer: "3"
// }, {
// 	question: "What color can you add to make a color cooler?"
// 	choices: [	"Black",
// 				"Red",
// 				"Blue",
// 				"Green"]
// 	answer: "2"
// }, {
// 	question: "Who designed the color wheel?"
// 	choices: [	"Gustav Klimt",
// 				"Wolfgang Goethe ",
// 				"Paul Cezanne",
// 				"Sir Isaac Newton"]
// 	answer: "3"
// },{
// 	question: "What do you add to tint a color?"
// 	choices: [	"Black",
// 				"White",
// 				"Blue",
// 				"Gray"]
// 	answer: "0"
// },{
// 	question: "What do you add to shade a color?"
// 	choices: [	"Purple",
// 				"Black",
// 				"Blue",
// 				"Gray"]
// 	answer: "1"
// },{
// 	question: "Which is NOT a primary color?"
// 	choices: [	"Yellow",
// 				"Orange",
// 				"Blue",
// 				"Red"]
// 	answer: "1"
// },{
// 	question: "Which is NOT an example of complementary colors?"
// 	choices: [	"Red and Red-Violet",
// 				"Red-Violet and Yellow-Green",
// 				"Yellow and Blue",
// 				"Red and Green"]
// 	answer: "0"
// },{
// 	question: "What are secondary colors?"
// 	choices: [	"Two colors opposite each other on the color wheel",
// 				"Two analogous colors mixed together",
// 				"A tertiary color and secondary color mixed together",
// 				"Two primary colors mixed together"]
// 	answer: "3"
// },{
// 	question: "Which is NOT a secondary color?"
// 	choices: [	"Blue",
// 				"Orange",
// 				"Violet",
// 				"Green"]
// 	answer: "0"
// },{
// 	question: "How do you tone a color?"
// 	choices: [	"Add Gray",
// 				"Add Blue",
// 				"Add Orange",
// 				"Add Black"]
// 	answer: "0"
// },{
// 	question: "Which is a tertiary color?"
// 	choices: [	"Orange",
// 				"Green",
// 				"Yellow",
// 				"Blue-Violet"]
// 	answer: "3"
// },{
// 	question: "What are tertiary colors?"
// 	choices: [	"Two analogous colors",
// 				"Two primary colors mixed together",
// 				"A color created from a primary and secondary color",
// 				"A color with yellow added to it"]
// 	answer: "2"
// }, {
// 	question: "What is a hue?"
// 	choices: [	"A color with blue added to it",
// 				"Two primary colors mixed together",
// 				"The purest, brightest form of a color",
// 				"A color with black added to it"]
// 	answer: "2"
// },{
// 	question: "What are tetradic colors?"
// 	choices: [	"Four colors evenly spaced around the color wheel",
// 				"A pair of analogous colors",
// 				"Four colors next to each other on the color wheel",
// 				"Four colors mixed together"]
// 	answer: "0"
// },{
// 	question: "What are triadic colors?"
// 	choices: [	"Three primary colors mixed together",
// 				"Three colors evenly spaced around the color wheel",
// 				"Three colors next to each other on the color wheel",
// 				"Three colors mixed together"]
// 	answer: "1"
// }]//End of question object



})//This is the end of the document.ready function
