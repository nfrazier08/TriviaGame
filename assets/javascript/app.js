//my global variables
var counter = 5;
var myQuestions = [{
	question: "What are complementary colors?",
	choices: [	"Two primary colors mixed together",
				"Two colors next to each other on the color wheel",
				"Two colors opposite each other on the color wheel",
				"Two colors mixed with white"],
	answer: "Two colors opposite each other on the color wheel"
},{
	question:"What are analogous colors?",
	choices: [	"Two colors mixed with black",
				"Two colors opposite each other on the color wheel",
				"Three colors next to each other on the color wheel",
				"Two complementary colors mixed together"],
	answer: "Three colors next to each other on the color wheel"
},{
	question: "What color can you add to another color to make it warmer?",
	choices: [ 	"White",
	 			"Orange",
				"Yellow",
				"Red"],
	answer: "Red"
},{
	question: "What color can you add to another color to make it cooler?",
	choices: [ 	"Black",
				"Blue",
			 	"Red",
 				"Green"],
	answer: "Blue"
},{
	question: "Who invented the circular color wheel?",
	choices: [ 	"Issac Newton",
				"Wolfgang Goethe",
				"Paul Cezanne",
				"Gustav Klimt"],
	answer: "Issac Newton"
},{
	question: "Which do you add to tint a color?",
	choices: [ 	"White",
				"Black",
				"Blue",
				"Gray"],
	answer: "Black"
},{
	question: "Which is NOT a primary color?",
	choices: [	"Yellow",
				"Red",
				"Blue",
	 			"Orange"],
	answer: "Orange"
},{
	question: "Which is NOT an example of a complementary color pair?",
	choices: [	"Red and Red-Violet",
				"Red-Violet and Yellow-Green",
				"Yellow and Blue",
				"Red and Green"],
	answer: "Red and Red-Violet"
},{
	question: "What are secondary colors?",
	choices: [	"Two colors opposite each other on the color wheel?",
				"Two primary colors mixed together",
				"A tertiary color and a secondary color mixed together",
				"Two analogous colors mixed together"],
	answer: "Two primary colors mixed together"
},{
	question: "Which is NOT a secondary color?",
	choices: [	"Violet",
				"Orange",
				"Blue",
				"Green"],
	answer: "Blue"
},{
	question: "What is the value of a color?",
	choices: [	"The lightness or darkness of a color",
				"The saturation of a color",
				"How well a color pairs with its complement",
				"Adding black to a color"],
	answer: "The lightness or darkness of a color"
},{
	question: "Which IS tertiary color?",
	choices: [	"Orange",
				"Green",
				"Yellow",
				"Blue-Violet"],
	answer: "Blue-Violet"
},{
	question: "What are tertiary colors?",
	choices: [	"Two analogous colors",
				"Two primary colors mixed together",
				"A color created from a primary and a secondary color",
				"A color with yellow added to it"],
	answer: "Blue-Violet"
},{
	question: "What is a hue?",
	choices: [	"A color with blue added to it",
				"The purest, brightest form of a color",
				"Two tertiary colors mixed together", 
				"Different intensities of a color"],
	answer: "The purest, brightest form of a color"
},{
	question: "What is a monochromatic color scheme?",
	choices: [	"Four colors evenly spaced around the color wheel",
				"A color scheme with two or more colors",
				"A color scheme with no color",
				"A color scheme with one color with shades, tints and tones"],
	answer: "A color scheme with one color with shades, tints and tones"
},{
	question: "How can you change the intensity of a color?",
	choices: [	"Add a tertiary color",
				"Add a primary color",
				"Add black to a color",
				"Add the complement of the color"],
	answer: "Add the complement of the color"
},{
	question: "Who authored Theory of Colors in 1810?",
	choices: [ 	"Wolfgang Goethe",
				"John Murray",
				"Rudolf Steiner",
				"Louis Bertrand"],
	answer: "Wolfgang Goethe"
},{
	question: "Mixing of colored physical substances correspondes to:",
	choices: [	"Additive Mixing",
				"Chroma Mixing",
				"Subtractive Mixing",
				"Color Mixing"],
	answer: "Subtractive Mixing"
}];//End of myquestion object

var answeredRight = 0;
var answeredWrong = 0;


$(document).ready(function(){


//STEP 1:Create a simple function for the timer
	//Clear timer once it gets to 0
var timer = $("#myTimer");
	timer.html("5");
	var interval = setInterval(countdownTimer, 1000);

	function countdownTimer(){
		counter--;
		timer.html(counter);
		if (counter === 0){
			clearInterval(interval);
		}
	}

//STEP 2: Get questions and answers to display on the screen
	//Clear question div 
	$("#theQuestion").empty();
		for (var i = 0; i < myQuestions.length; i++) {
  			$("#theQuestion").append("<div><h4>" + myQuestions[i].question + "</div></h4>");
  			var newUl = $("<ul>") //This is just a variable

  			//second for loop is to get choices to appear with the questions in an unordered list
  			for (var j = 0; j < myQuestions[i].choices.length; j++) {
  				var newLi = $("<li>");
  				newLi.text(myQuestions[i].choices[j]); //Tell computer what text to put in the new LI
  				newUl.append(newLi);

  				$("#theQuestion").append(newUl);
  			}
  		}//End of first loop

//STEP 3: Add a click event listener to the li
 	//To create an event listener to a dynamically created
 	//element, attach the element that needs the listener 
 		//(in this case the "li")
 	//To an element that already exists
 		//(in this case the document)
 			$(document).on("click", "li", function() {
 				console.log($(this).text());
 				$(this).addClass("playerChoice");
   			}); //End of the click function

//STEP 4: Check to see if the player selection is correct answer
	for (var i = 0; i < myQuestions[i].answer.length; i++) {
			if(".playerChoice" === myQuestions.answer){
			answeredRight++
		}
			else{
			answeredWrong++
		}
	}//end of for loop

console.log("r " + answeredRight);
console.log("w " + answeredWrong);


}) //document.ready










