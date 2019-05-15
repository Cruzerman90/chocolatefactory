
var questions = [{
    ques: "How many times has Beric Dondarrion been brought back to life by the Lord of Light?",
    ans: ["Five", "Six", "Four", "Three"],
    name: "Beric",
    correct: "Six",
    divClass: ".Beric"
},
{
    ques: "Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",
   ans: ["Ghost", "Lady", "Nymeria", "GreyWind"],
    name: "Lady",
    correct: "Lady",
    divClass: ".Lady"
},
{
    ques: "The Night King was created using a dagger made of:",
    ans: ["Widow's Wail", "Oathkeeper", "Northguard", "Ice"],
    name: "Ice",
    correct: "Ice",
    divClass: ".Ice"
},
{
    ques: "What is Sansa Stark's favorite treat?",
    ans: ["Honey Cakes", "Lemon Cakes", "Apple Cranberry Crisp", "Strawberry Rhubarb Pie"],
    name: "Sansa",
    correct: "Lemon Cakes",
    divClass: ".Sansa"
},
{
    ques: "Who created the secret tunnel in the sewers under Casterly Rock?",
    ans: ["Tyrion Lannister", "Lord Baelish", "Jaime Lannister", "Varys"],
    name: "firstForce",
    correct: "Tyrion Lannister",
    divClass: ".firstForce"
},
{
    ques: "Who is the ruler of the Iron Islands at the beginning of Game of Thrones?",
    ans: ["Aeron Greyjoy", "Yara Greyjoy", "Euron Greyjoy", "Balon Greyjoy"],
    name: "airMaxDesigner",
    correct: "Balon Greyjoy",
    divClass: ".airMaxDesigner"
},
{
    ques: "In which city does Arya Stark train to become a Faceless Man?",
    ans: ["Meereen", "Braavos", "Pentos", "Astapor"],
    name: "jordan",
    correct: "Braavos",
    divClass: ".jordan"
}

] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});


var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 7 questions 
for (var j = 0; j < 7; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio buttons
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 7; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 7; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz