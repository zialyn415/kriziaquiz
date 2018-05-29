var questions = [
	{
		question: "What's Krizia's preferred last name?",
		answer: "ludovico"
	},
	{
		question: "What's Krizia's favorite color?",
		answer: "orange"
	},
	{
		question: "How many sibling's does Krizia have?",
		answer: 7
	},
	{
		question: "Is Krizia Left handed or Right handed?",
		answer: "Right"
	},
	{
		question: "Who's Krizia's favorite poet?",
		answer: "maya angelou"
	},
	{
		question: "How old is Krizia?",
		answer: 26
	},
	{
		question: "What's Krizia's favorite flower?",
		answer: "sunflowers"
	},
	{
		question: "What does Krizia prefer coffee or tea?",
		answer: "coffee"
	},
	{
		question: "Where was Krizia born and raised?",
		answer: "san francisco"
	},
	{
		question: "What's Krizia's favorite animal",
		answer: "whales"
	}
];

for(var i = 0; i < questions.length; i++) {
	var question = questions[i].question;
	var quest = document.getElementById('question' + [i]);

	console.log(question, quest);

	quest.textContent = question;
}

function testResults() {
	var correct = 0;
	var incorrect = 0;

	for(var i = 0; i < questions.length; i++) {
		var answer = questions[i].answer;
		var guess = document.getElementById('answer' + [i].value);
		var questionSpot = document.getElementById('question' + [i]);

		if(answer == guess) {
			questionSpot.className = 'correct';
			correct++
		} else {
			questionSpot.className = 'incorrect';
			incorrect++;
		};
	};

	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}