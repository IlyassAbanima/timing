let sec = 0;
let hours = 0;
let mins = 0 ;
let timer;
let res = 0;
const stopButton = document.querySelector('.stop');
function start(){
  setInterval(()=>{
    if (res == 1){
      runCode()
    }
    if (sec == 60){
      mins = mins +1;
      sec = -1;
    };
  
    if(mins == 60){
      hours += 1;
      mins = 0;
    }
    sec=sec+1;
    timer = document.querySelector('.time').innerHTML = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    
  }, 1000);

}


function reset(){
  sec = -1;
  mins = 0;
  hours = 0;
  

}

function stop(){
  if (res == 0){
    res = 1;
  }

  else if (res == 1){
    res = 0;
  }
}


function waitForClick(buttonId) {
  return new Promise((resolve) => {
    const button = document.getElementById(buttonId);

    button.addEventListener('click', function handleClick() {
      resolve(); 
      button.removeEventListener('click', handleClick); // 
    });
  });
}

async function runCode() {
  console.log("Waiting for button click...");

  
  await waitForClick('stopButton');

 
  console.log("Button clicked! Continuing execution...");
  if (res == 0){
    res = 1;
  }

  else if (res == 1){
    res = 0;
  }
}

