$(function (){

    startChatLoop();

});

function startChatLoop () {
    startChatTopic();
}

function startChatTopic () {
    say("Hello! Ready to learn some math?");
    choices(["Yes!", "No."], function(optID) {
        if(optID == 0) {
            readyForMath();
        } else {
            say("That's okay, bye!");
        }
    });
}

function readyForMath () {
    say("Great!");
    say("Which of these topics would you like?");
    var topicNames = [];
    for (var i = 0; i < content.length; i++) {
        topicNames.push(content[i].name);
    }
    choices(topicNames, function (topicIdx) {
        var topic = content[topicIdx];
        chosenTopic(topic);
    })
}

function chosenTopic (topic) {
    say("Great choice!");
    say("We are going to begin with the first subtopic.");
    var subtopic = topic.subtopics[0];
    say("This subtopic is called '"+subtopic.name+"'.");
    say("First, we will do a quiz to assess your prior knowledge.");
    say("If we find there is room for improvement, I will recommend you work on this subject.");
    say("Either way, you choose whether you want to work on this or if you want to skip it.");
    say("There will be a new quiz after we have done some work, to assess improvement.");
    say("Don't guess blindly, if so you're only lying to yourself. Educated guessing is fine.");
    say("Feel free to use pen and paper, but don't google or ask someone the answer, or use a calculator.");
    say("Sounds ok?");
    choices(["Okay, ready."], function (answID) {
        startQuiz(subtopic.quiz, function(score) {
            var max = subtopic.quiz.length;
            say("You got a score of "+score+" out of "+max+".");
            var ratio = score / max;
            if (ratio < 0.5) {
                say("I recommend you work on this subtopic.");
            } else if (ratio <= 0.6) {
                say("You obviously know some things about this subtopic, but I still recommend you work on it.");
            } else if (ratio <= 0.8) {
                say("You did well, but if you wish anyway we can work on this subtopic.");
            } else {
                say("You did very well, so your time is probably better spent working on something that is more challenging for you.");
            }
            say("So, do you want to work on this, or skip it?");
            choices(["Work", "Skip"], function(answID) {
                if (answID == 0) {
                    say("Great choice!");
                    workOnSubTopic(subtopic);
                } else {
                    say("Okay, that's fine. I will mark it as complete.");
                    // TODO: Next subtopic.
                }
            });
        });
    });
}


function workOnSubTopic (subtopic) {
    say("We have three things we can do: explanations, questions, and finishing up and retaking the quiz.");
    say("I recommend doing a few explanations first, then questions if you have any, and retaking the quiz when you feel ready.");
    say("Feel free to learn from other resources as well.");
    choices(["Explanation", "Question", "Retake Quiz"], function (answID) {
        if (answID == 0) {
            workOnSubTopicExplanation(subtopic);
        } else if (answID == 1) {
            workOnSubTopicQuestion(subtopic);
        } else if (answID == 2) {
            workOnSubTopicRetakeQuiz(subtopic);
        }
    });
}

function workOnSubTopicExplanation (subtopic) {
    say("Okay, which of the following explanations would you like:");
    var expl = subtopic.explanations;
    var explNames = [];
    for (var i = 0; i < expl.length; i++) {
        explNames.push(expl[i].name);
    }
    choices(explNames, function (explID) {
        var cexpl = expl[explID];
        say(cexpl.text);
        choices(["Okay.. I understand.", "I did not understand."], function (answID) {
            if (answID == 0) {
                say("Great!");
                workOnSubTopic (subtopic);
            } else if (answID == 1) {
                say("I'm sorry. I'll let my creators know.")
                // Let creators know.
                workOnSubTopic(subtopic);
            }
        })
    });
}

function workOnSubTopicQuestion (subtopic) {
    say("Okay, which of the following questions would you like to ask:");
    var ques = subtopic.questions;
    var quesNames = [];
    for (var i = 0; i < ques.length; i++) {
        quesNames.push(ques[i].q);
    }
    choices(quesNames, function (quesID) {
        var cques = ques[quesID];
        say(cques.a);
        choices(["Okay.. I understand.", "I did not understand."], function (answID) {
            if (answID == 0) {
                say("Great!");
                workOnSubTopic (subtopic);
            } else if (answID == 1) {
                say("I'm sorry. I'll let my creators know.")
                // Let creators know.
                workOnSubTopic(subtopic);
            }
        })
    });
}

function workOnSubTopicRetakeQuiz (subtopic) {
    say("Ok, great!");
    say("Afterwards, you again get to decide whether you are done with this subtopic or if you want to work even more.");
    say("Here it comes:");
    startQuiz(subtopic.quiz, function(score) {
        var max = subtopic.quiz.length;
        say("You got a score of "+score+" out of "+max+".");
        var ratio = score / max;
        if (ratio < 0.5) {
            say("I recommend you work more on this subtopic.");
        } else if (ratio <= 0.6) {
            say("You obviously have learned some things about this subtopic, but I still recommend you work more on it.");
        } else if (ratio <= 0.8) {
            say("You did well, but if you wish anyway we can work even more on this subtopic.");
        } else {
            say("You did very well, so your time is probably better spent working on something that is more challenging for you.");
        }
        say("So, do you want to work more on this, or be done with it?");
        choices(["Work", "Done"], function(answID) {
            if (answID == 0) {
                workOnTopic(topic);
            } else {
                say("Great, I will mark it as complete.");
                // TODO: Next subtopic.
            }
        });
    });
}


function startQuiz(quiz, callback) {
    say("Here's the first question:");
    quizStep(quiz, callback, 0, 0);
}

function quizStep(quiz, callback, amtCorrect, i) {
    var cquiz = quiz[i];
    say(cquiz.question);
    choices(cquiz.choices, function (answID) {
        var nAmtCorrect = amtCorrect;
        if (answID == cquiz.correct) {
            nAmtCorrect += 1;
        }
        say("Thank you for the answer.");
        if (i >= quiz.length - 1) {
            callback(nAmtCorrect);
        } else {
            say("Now the next question:");
            quizStep(quiz, callback, nAmtCorrect, i + 1);
        }
    });
}


function say (str) {
    $("#chatarea").append("<div class='msg bot'> "+str+" </div>");
    updateScroll();
}

var gCallback;
function choices (lst, callback) {
    gCallback = callback;
    var choicesStr = "";
    for (var i = 0; i < lst.length; i++) {
        var choice = lst[i];
        choicesStr += "<input class='choice' type='button' value='"+choice+"' onclick='onClickOption("+i+", \""+choice+"\")'>";
    }
    $("#chatarea").append("<div id='choices'>"+choicesStr+"</div>");
    updateScroll();
}

function onClickOption(id, choice) {
    $("#choices").remove();
    $("#chatarea").append("<div class='msg user'>"+choice+"</div>");
    var callback = gCallback;
    gCallback = null;
    updateScroll();
    callback(id);
}

function updateScroll() {
    var chatarea = document.getElementById("chatarea");
    chatarea.scrollTop = chatarea.scrollHeight;
}

