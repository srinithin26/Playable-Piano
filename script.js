const pianokeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");


let allKeys = [],
audio = new Audio("tunes/a.wav"); // by default audio src is "a" tune

const playTune = (key) =>{
    audio.src = `tunes/${key}.wav`; //audio src changes according to key pressed
    audio.play(); // playing audio
    console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`); //getting clicked key element
    clickedKey.classList.add("active");//adding active class to clicked key element
    setTimeout(() =>{ //removing active class after 150 ms from clicked key element
        clickedKey.classList.remove("active");
    }, 150);
    
}

pianokeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    
});

const showHideKeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const pressedKey = (e) =>{
    if(allKeys.includes(e.key)) playTune(e.key);
}
keysCheckbox.addEventListener("click", showHideKeys);

volumeSlider.addEventListener("input", handleVolume);

document.addEventListener("keydown", pressedKey);