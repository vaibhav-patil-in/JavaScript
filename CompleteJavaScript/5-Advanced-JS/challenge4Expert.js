
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

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if(this.correctAnswer === ans)
        {
            console.log('Correct Answer');
            sc = callback(true);
        }
        else
        {
            console.log('Incorrect Answer');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('Your Current Score is: '+score);
        console.log('-------------------------------')
    }

    var q1 = new Question('Whats my name?' , ['Gaurav','Neha','Vaibhav'], 2);
    var q2 = new Question('Who is Motu?' , ['Gaurav','Neha','Vaibhav'], 1);
    var q3 = new Question('My Car is?' , ['Honda','Maxima','BMW'], 1);
    var q4 = new Question('I am in?' , ['USA','India','England'], 0);

    var questions = [q1, q2, q3, q4];

    //Use closure to keep score - Use this function to update the score
    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();

    function nextQuestion() {

        var randomQuestion = Math.floor((Math.random() * questions.length));
        
        questions[randomQuestion].displayQuestion();
    
        var answer = prompt('Please select the correct answer');
        
        if(answer !== 'exit') {
            questions[randomQuestion].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();

})();