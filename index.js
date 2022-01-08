window.focus();

const drum = document.querySelectorAll(".drum-pad");

const data = [
  {
    letter: "Q",
    keycode: 81,
    id: "open-hh",
    //url: "https://www.dropbox.com/s/uoltij83v5qzodt/hihat.wav?raw=tru",
  },
  {
    letter: "W",
    keycode: 87,
    id: "closed-hh",
    //url: "https://www.dropbox.com/s/uoltij83v5qzodt/hihat.wav?raw=true",
  },
  {
    letter: "E",
    keycode: 69,
    id: "kick-and-hat",
    //url: "https://www.dropbox.com/s/n23xi84cwm4pp56/kick.wav?raw=true",
  },
  {
    letter: "A",
    keycode: 65,
    id: "boom",
    //url: "https://www.dropbox.com/s/el7w19duuwcthjr/boom.wav?raw=true",
  },
  {
    letter: "S",
    keycode: 83,
    id: "clap",
    //url: "https://www.dropbox.com/s/ws0xtbmc86ef1jk/clap.wav?raw=true",
  },
  {
    letter: "D",
    keycode: 68,
    id: "ride",
    //url: "https://www.dropbox.com/s/btsa464ag6h0dkq/ride.wav?raw=true",
  },
  {
    letter: "Z",
    keycode: 90,
    id: "tink",
    //url: "https://www.dropbox.com/s/s61pecx06f7l4rx/tink.wav?raw=true",
  },
  { 
    letter: "X", 
    keycode: 88, 
    id: "Tom", 
    //url: "https://www.dropbox.com/s/jrg1yinib00p3b5/tom.wav?raw=true" 
  },
  {
    letter: "C",
    keycode: 67,
    id: "snare",
    //aaaurl: "https://www.dropbox.com/s/w11ms1kvg1cm16m/snare.wav?raw=true",
  },
];

const updateDisplay = (display) => {
    document.querySelector("#display h2").innerText = display.toUpperCase();
};

const clickPlay = (e) => {
  const dataKey = e.target.getAttribute("id");
    
  if(dataKey){
      const sound = document.querySelector(`audio[data-key="${dataKey}"]`);        
      const pad = document.querySelector(`div[id="${dataKey}"]`);     
      pad.classList.add("playing");
      sound.currentTime = 0;
      sound.play();          
      updateDisplay(dataKey);
  }else{
      return;
  }
};

const playSound = (e) => { 
   
  for(element of data){    
    if(e.keyCode == element.keycode){
      const audio = document.querySelector(`audio[id="${element.id}"]`);
      const key = document.querySelector(`div[id="${element.id}"]`);
      if (!audio) return;
      key.classList.add("playing");
      audio.currentTime = 0;
      audio.play();  
      updateDisplay(element.id)
    }
  } 
};

drum.forEach((element)=>{
    element.addEventListener("click", clickPlay);    
})
   
document.addEventListener("keydown", playSound);

