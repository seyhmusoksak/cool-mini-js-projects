var gamePattern = [];
var userClickedPattern = [];
var level = 1;
var started = false;

const buttonColours = [
	"red",
	"blue",
	"green",
	"yellow"
]

function animatePress(currentColour) {
	$("#" + currentColour).addClass("pressed").delay(100).queue(function(next) {
	  $(this).removeClass("pressed");
	  next();
	});
  }


function checkAnswer(currentLevel) {
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		console.log("success");
		if (gamePattern.length === userClickedPattern.length) {
			setTimeout(function () {
				level++;
				nextSequence();
			}, 1000);
		}
	}
	else {
		console.log("wrong");
		gamePattern = [];
		$("#level-title").text("Game over, press any key to try again");
		started = false;
		level = 1;
	}
}


$(document).on("keypress", function () {
	if (!started) {
		$("#level-title").text("Level " + level);
		nextSequence();
		started = true;
	  }
})

setInterval(function () {
	$("#level-title").fadeIn().fadeOut();
}, 400);


function playSound(name)
{
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}


function handleClick() {
	var userChosenColour = this.id;
	userClickedPattern.push(userChosenColour);
	playSound(this.id);
	animatePress(this.id);
	checkAnswer(userClickedPattern.length - 1);
}

$(".btn").on("click", handleClick);

function nextSequence() {
	userClickedPattern = [];
	$("#level-title").text("Level " + level);
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
	var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
	audio.play();

  }


