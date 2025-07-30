const drumPad = document.querySelectorAll(".drum-pad")
const display = document.querySelector("#display")


drumPad.forEach(drum =>{
 
  const audio = drum.querySelector(".drum-pad .clip")
  drum.addEventListener("click", ()=>{
     display.innerText = ""
    audio.play() 
     if(drum.textContent.trim()==="Q"){
    display.innerText = "Heater 1"
 }else if(drum.textContent.trim()==="W") display.innerText = "Heater 2"
 else if(drum.textContent.trim()==="E") display.innerText = "Heater 3"
 else if(drum.textContent.trim()==="A") display.innerText = "Heater 4"
 else if(drum.textContent.trim()==="S") display.innerText = "Clap"
 else if(drum.textContent.trim()==="D") display.innerText = "Open HH"
 else if(drum.textContent.trim()==="Z") display.innerText = "Kick n' hat"  
 else if(drum.textContent.trim()==="X") display.innerText = "Kick"
 else if(drum.textContent.trim()==="C") display.innerText = "Closed HH"
  })
  
  document.addEventListener("keydown", (e)=>{
  if(e.key === drum.textContent.trim().toLowerCase()){
    audio.play()
    if(e.key==="q"){
    display.innerText = "Heater 1"
 }else if(e.key =="w") display.innerText = "Heater 2"
 else if(e.key==="e") display.innerText = "Heater 3"
 else if(e.key==="a") display.innerText = "Heater 4"
 else if(e.key==="s") display.innerText = "Clap"
 else if(e.key==="d") display.innerText = "Open HH"
 else if(e.key==="z") display.innerText = "Kick n' hat"  
 else if(e.key==="x") display.innerText = "Kick"
 else if(e.key==="c") display.innerText = "Closed HH"
  }

})
})
