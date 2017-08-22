swer: "0"
},{
	question: "What are triadic colors?"
	choices: [	"Three primary colors mixed together",
				"Three colors evenly spaced around the color wheel",
				"Three colors next to each other on the color wheel",
				"Three colors mixed together"]
	answer: "1"
}]//End of question object

//Display questions to the DOM
$(".answer1").html(questions.questions);
})//This is the end of the document.ready function
//previous buttons
<div class="row">
						<div class="col-lg-12">
							<a class="btn btn-primary btn-block" role="button" id="answer1">Answer 1</a>
			 			</div>
					</div>
					<!--Row 3 for button 2-->
					<div class="row">
						<div class="col-lg-12">
							<a class="btn btn-primary btn-block" href="#" role="button" class="answer2">Answer 2</a>
			 			</div>
					</div>
					<!--Row 4 for button 3-->
					<div class="row">
						<div class="col-lg-12">
							<a class="btn btn-primary btn-block" href="#" role="button" class="answer3">Answer 3</a>
			 			</div>
					</div>
					<!--Row 5 for button 4-->
					<div class="row">
						<div class="col-lg-12">
							<a class="btn btn-primary btn-block" href="#" role="button" class="answer4">Answer 4</a>
			 			</div>
					</div>


//button and timer house

					<!--Second Row-->
	<div class="row" id="theGame">
		<!--Insert Jumbotron here to use 8 columns for the questions-->
				<div class="col-lg-8">
					<div class="jumbotron">
					<!--Row 1 for questions-->
						<div class="row">
							<div class="col-lg-12">
								<h1 class="display-3" id="questionTitle">Questions</h1>
				 			</div>
						</div>
					<!--Row 2 for buttons-->
						<div class="row">
							<div class="col-lg-12">
								 <div class="btn-group-vertical">
								 	<div class="col-lg-12">
									    <button type="button" class="btn btn-primary" id="choice1">Answer1</button>
									</div>
									<div class="col-lg-12">
									    <button type="button" class="btn btn-primary" id="choice2">Answer2</button>
									</div>
									<div class="col-lg-12">
									    <button type="button" class="btn btn-primary" id="choice3">Answer3</button>
									</div>
									<div class="col-lg-12">
									    <button type="button" class="btn btn-primary" id="choice4">Answer4</button>
									</div>
								 </div>
							</div>
						</div>
					</div>	 			
				</div> <!--End of the 8 column-->
				

		<!--Timer will take the next four columns-->
			<div class="col-lg-4">
				<div class="jumbotron">
			   		<p id="myTimer">Where is the timer???</p> 
				</div>
			</div>
	</div><!--End of row for timer and question house-->

	<!--timer-->

	/global variables
var counter = 30;
var myQuestions = "What are complementary colors?";


$("#startButton").on('click', function() {
	function startGame() {
		$(".question").html(timer);
		$("#startButton").hide();
	} //End of start game function

	//Call start game function
	startGame();


	//Timer Function
	function timerSetup(){
		$(".myTimer").html(counter);
		//I want the countDown function to happen
			//every 1000 milliseconds(1 second)

	var interval = setInterval(countDown, 1000);

	function countDown(){
		counter--;
		if(counter===0){
		clearInterval(interval)
		}
	} //End of countdown function	
		countDown();
	} //End of timerSetup function
	timerSetup();

	})//End of click function


	









// //Questions
// //Creating an object with my questions
// var questions = ["What are complementary colors?",
// 				"What are analogous colors?",
// 				"What color can you add to make a color warmer?",
// 				"What color can you add to make a color cooler?",
// 				"Who designed the color wheel?",
// 				"What do you add to tint a color?",
// 				"What do you add to shade a color?",
// 				"Which is NOT a primary color?",
// 				"Which is NOT an example of complementary colors?",
// 				"What are secondary colors?",
// 				"Which is NOT a secondary color?",
// 				"How do you tone a color?",
// 				"Which is a tertiary color?", 
// 				"What are tertiary colors?",
// 				"What is a hue?", 
// 				"What are tetradic colors?", 
// 				"What are triadic colors?"
// 				];

// var choices = [	"Two primary colors mixed together",
// 				"Two colors next to each other on the color wheel",
// 				"Two colors opposite each other on the color wheel",
// 				"Two colors mixed with white"]; 

// 		$("#questionTitle").html(questions[3]);
// 		$("#choice1").html(choices[0]);
// 		$("#choice2").html(choices[1]);
// 		$("#choice3").html(choices[2]);
// 		$("#choice4").html(choices[3]);
		










}
// //access all HTML elements here:
// var container = $("#quizContainer");
// var questionDisplay = $("#question");
// var playerChoice1 = $("#opt1");
// var playerChoice2 = $("#opt2");
// var playerChoice3 = $("#opt3");
// var playerChoice4 = $("#opt4");
// var resultsDisplay = $(".resultsContainer");

// //function to load the questions
// function loadQuestion(questionIndex){
// 	//myQuestions is the array
// 		//questionIndex is the array index to retreieve questions
// 	var q = myQuestions[questionIndex];
// 	//set text to for question element
// 	//QuestionIndex + 1 will give question number


// 	(questionDisplay).innerText(questionIndex + 1) + ". " + q.question;
// 	console.log(questionDisplay); 

// 	opt1.text(q.choice1);
// 	opt2.text(q.choice2);
// 	opt3.text(q.choice3);
// 	opt4.text(q.choice4);

// 	loadQuestion();
// };







}

}
}
// }/End of the document.ready function