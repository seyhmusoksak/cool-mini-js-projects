
function handleClick(events) {
	const soundMap = {
		w: "sounds/tom-1.mp3",
		a: "sounds/tom-2.mp3",
		s: "sounds/tom-3.mp3",
		d: "sounds/tom-4.mp3",
		j: "sounds/snare.mp3",
		k: "sounds/crash.mp3",
		l: "sounds/kick-bass.mp3"
	};
	var sound = soundMap[events.key ?? this.innerHTML];
	if (sound) {
		new Audio(sound).play();
		handlePressed(events.key ?? this.innerHTML)
	} else {
		console.log(this.innerHTML);
	}
}


function handlePressed(currentKey) {
	const key = document.querySelector("." + currentKey);
	key.classList.add("pressed");
	setTimeout(() => {
		key.classList.remove("pressed")
	}, 200);
}


document.addEventListener("keydown", handleClick);

for ( let i = 0; i < document.querySelectorAll(".drum").length; i++ ) {
	document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

