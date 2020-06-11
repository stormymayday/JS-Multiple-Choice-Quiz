(function () {

    // Function Constructor
    var Question = function (question, arrOptions, answer) {
        this.question = question;
        this.arrOptions = arrOptions;
        this.answer = answer;
    };

    Question.prototype.askQuestion = function () {
        // log the question
        console.log(this.question);

        // log the options
        for (var i = 0; i < this.arrOptions.length; i++) {
            console.log((i + 1) + '. ' + this.arrOptions[i]);
        }

        // prompt the answer
        var answer = parseInt(prompt("Please enter your option"));

        // check if the answer is correct and set the flag
        if (answer === this.answer) {
            this.flag = 1;
            console.log("correct");
        } else {
            this.flag = 0;
            console.log('incorrect');
        }
    };

    // Questions
    var question1 = new Question('Hi?', ['Option 1', 'Option 2'], 0);
    var question2 = new Question('Hello?', ['Option 1', 'Option 2'], 1);
    var question3 = new Question('Bye?', ['Option 1', 'Option 2', 'Option 3'], 3);

    var questions = [question1, question2, question3];

    function startQuiz() {
        var score = 0;
        for (var i = 0; i < questions.length; i++) {
            questions[i].askQuestion();
            if (questions[i].flag == 1) {
                score += 1;
                console.log('Your score is ' + score);
                console.log('----------------');
            } else {
                console.log('Your score is ' + score);
                console.log('----------------');
                continue;
            }
        }
    }

    startQuiz();

})();