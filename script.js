const Kits = ["crash", "Kick","Snare","tom"];

const containerEl = document.querySelector(".container");

Kits.forEach((kit) => {
	const btnEl = document.createElement("button");
	btnEl.classList.add("btn")
	btnEl.innerText = kit;
	btnEl.style.backgroundimage = "url(image/" + Kits + ".jpg)"
	containerEl.appendChild(btnEl);
	const audioEl = document.createElement("audio");
	audioEl.src = "sound/" + Kits + ".mp3"
	containerEl.appendChild(audioEl);
	btnEl.addEventListener("click",() => {
		audioEl.play();
	});
	 window.addEventListener("keydown",(event)=>{
	 	if(event.key === kit.slice(0,1)){
	 		audioEl.play()
	 		btnEl.style.transform = "scale(.9)"
	 	};
	 })
});