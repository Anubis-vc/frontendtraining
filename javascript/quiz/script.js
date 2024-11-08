// Create questions
const qs = [
	{
		question: "In the movie <i>The Matrix<i>, what was Neo's real name?"
		, answers: [
			{text: "Bill Kingsly", value: false}
			, {text: "Tim Walsh", value: false}
			, {text: "Thomas Anderson", value: true}
			, {text: "Rudy Goldberg", value: false}
		]
	}
	, {
		question: "Which corporation created replicants in <i>Blade Runner<i>?"
		, answers: [
			{text: "Tyrell Corporation", value: true}
			, {text: "Doofenshmirtz Evil Inc.", value: false}
			, {text: "Symbiosis Corporation", value: false}
			, {text: "Oscorp", value: false}
		]
	}
	, {
		question: "Which 1927 musical marks the first \"talkie\""
		, answers: [
			{text: "The Jazz Singer", value: true}
			, {text: "Singing in the Rain", value: false}
			, {text: "Gone with the Wind", value: false}
			, {text: "The Young Girls of Rochefort", value: false}
		]
	}
	, {
		question: "Which movie landed Spielberg his first Best Director Oscar win?"
		, answers: [
			{text: "Jaws", value: false}
			, {text: "Shindler's List", value: true}
			, {text: "Raiders of the Lost Ark", value: false}
			, {text: "E.T", value: false}
		]
	}
	, {
		question: "The stage play <i>Everybody Comes to Rick's</i> was the precursor to which Best Picture Winner?"
		, answers: [
			{text: "Gone with the Wind", value: false}
			, {text: "The Best Years of Our Lives", value: false}
			, {text: "Hamlet", value: false}
			, {text: "Casablanca", value: true}
		]
	}
	, {
		question: "Which movie does <i>not</i> share the record for winning the most Academy Awards?"
		, answers: [
			{text: "Titanic", value: false}
			, {text: "Ben-Hur", value: false}
			, {text: "The Lord of the Rings: Return of the King", value: false}
			, {text: "E.T: the Extra-Terrestrial", value: true}
		]
	}
	, {
		question: "Finish the quote: Say _____ to my little friend!"
		, answers: [
			{text: "Goodbye", value: false}
			, {text: "Hello", value: true}
			, {text: "Adios", value: false}
			, {text: "Gesundheit", value: false}
		]
	}
	, {
		question: "Which movie has the most Oscars without winning Best Picture?"
		, answers: [
			{text: "La La Land", value: false}
			, {text: "An American in Paris", value: false}
			, {text: "Cabaret", value: true}
			, {text: "The Fast and the Furious", value: false}
		]
	}
	, {
		question: "Jim Carey's <i>The Mask</i>, <i>Dumb and Dumber</i>, and <i>Ace Ventura</i> were all released in what year?"
		, answers: [
			{text: "2002", value: false}
			, {text: "1989", value: false}
			, {text: "1947", value: false}
			, {text: "1994", value: true}
		]
	}
	, {
		question: "In what 1969 movie does James Bond get married?"
		, answers: [
			{text: "On Her Majesty's Secret Service", value: true}
			, {text: "Casino Royale", value: false}
			, {text: "Dr.No", value: false}
			, {text: "Goldfinger", value: false}
		]
	}
];

// Create elements to track and display questions/answers
const questionElt = document.getElementById("pregunta");
const answersElts = document.getElementById("answers")
const nextBtn = document.getElementById("next");

let score = 0;
let questionIndex = 0;

// Reset quiz and counters at start
const startQuiz = () => {
	questionIndex = 0;
	score = 0;
	nextBtn.innerHTML = "Next";
	showQuestion();
}

// remove all previous questions and make sure next is not showing
const resetQuestions = () => {
	nextBtn.style.display = "none";
	while (answersElts.firstChild) {
		answersElts.removeChild(answersElts.firstChild);
	}
}

// Display questions and then answers using for each loop
const showQuestion = () => {
	resetQuestions();
	let currQuestion = qs[questionIndex];
	questionElt.innerHTML = (questionIndex + 1) + "." + currQuestion.question;

	currQuestion.answers.forEach(answer => {
		// creat button
		const btn = document.createElement("button");
		// add text to button
		btn.innerHTML = answer.text;
		// display as a button class id 
		btn.classList.add("btn");
		// add button to answers div
		answersElts.appendChild(btn);
		if (answer.value) {
			btn.dataset.correct = answer.value;
		}
		// change button classlist upon click for background change
		btn.addEventListener("click", event => {
			const selected = event.target;
			if (selected.dataset.correct === "true") {
				selected.classList.add("correct");
				score += 1;
			}
			else {
				selected.classList.add("incorrect");
			}
			// create array from answers 
			Array.from(answersElts.children).forEach(button => {
				// adds green background for the correct answer even if we choose incorrectly
				if (button.dataset.correct === "true") {
					button.classList.add("correct");
				}
				// disable all buttons now. one chance to answer.
				button.disabled = true;
			});
			nextBtn.style.display = "block";
		});
	});
};

const showScore = () => {
	resetQuestions();
	questionElt.innerHTML = `You scored ${score} out of ${qs.length}`;
	nextBtn.innerHTML = "Play again";
	nextBtn.style.display = "block";
}

const handleNext = () => {
	questionIndex += 1;
	if (questionIndex < qs.length) {
		showQuestion();
	}
	else {
		showScore();
	}
}

nextBtn.addEventListener("click", () => {
	if (questionIndex < qs.length) {
		handleNext();
	}
	else {
		startQuiz();
	}
})

startQuiz();