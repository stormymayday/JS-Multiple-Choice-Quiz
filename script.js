(function () {

    // Function Constructor
    var Question = function (question, arrOptions, correctOption) {
        this.question = question;
        this.arrOptions = arrOptions;
        this.correctOption = correctOption;
    };

    Question.prototype.askQuestion = function () {

        // log the question
        console.log(this.question);

        // log the options
        for (var i = 0; i < this.arrOptions.length; i++) {
            console.log((i + 1) + '. ' + this.arrOptions[i]);
        }

    };

    // Questions
    var question1 = new Question('Hi?', ['Option 1', 'Option 2'], 0);
    var question2 = new Question('Hello?', ['Option 1', 'Option 2'], 1);
    var question3 = new Question('Bye?', ['Option 1', 'Option 2', 'Option 3'], 3);

    var questions = [question1, question2, question3];

    function startQuiz() {

        var score, answer;
        score = 0;

        for (var i = 0; i < questions.length; i++) {

            questions[i].askQuestion();

            answer = parseInt(prompt("Please enter your option"));

            if (questions[i].correctOption == answer) {

                score += 1;
                console.log('Correct! Your score is ' + score);

            } else {

                console.log('Incorrect! Your score is ' + score);
                continue;

            }
        }

        console.log('Quiz is over! Your total score is ' + score);

    }

    startQuiz();

})();