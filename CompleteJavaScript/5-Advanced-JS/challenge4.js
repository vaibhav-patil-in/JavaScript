
(function() {

    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for(var i = 0; i< this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if(this.correctAnswer === ans)
        {
            console.log('Correct Answer');
        }
        else
        {
            console.log('Incorrect Answer');
        }
    }
    
    var q1 = new Question('Whats my name?' , ['Gaurav','Neha','Vaibhav'], 2);
    var q2 = new Question('Who is Motu?' , ['Gaurav','Neha','Vaibhav'], 1);
    var q3 = new Question('My Car is?' , ['Honda','Maxima','BMW'], 1);
    var q4 = new Question('I am in?' , ['USA','India','England'], 0);

    var questions = [q1, q2, q3, q4];
    
    var randomQuestion = Math.floor((Math.random() * questions.length));
    
    questions[randomQuestion].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer'));
    
    questions[randomQuestion].checkAnswer(answer);

})();