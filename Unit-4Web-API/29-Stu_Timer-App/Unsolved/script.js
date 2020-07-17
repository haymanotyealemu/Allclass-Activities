var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var status="working"; // Default status


function setTime(){
  var minutes;
  if (status === "working"){
    minutes = workMinutesInput.value.trim();
  }
  else{
    minutes= restMinutesInput.value.trim();
  }
  clearInterval(interval);
  totalSeconds= minutes * 60;
  
}


function startTimer() {
  // Write code to start the timer here
  // workking status countdown
  setTime();
  if(totalSeconds>0){
    interval= setInterval(function(){
      secondsElapsed++;
      renderTime();
    },1000);
  }
  
}
function renderTime(){
  minutesDisplay.textContent = getFormatedMinutes();
  secondsDisplay.textContent = getFormatedSeconds();
  if(secondsElapsed >= totalSeconds){
    alert("time a break");
   clearInterval(interval);
  }

}
function pause(){
  clearInterval(interval);
  renderTime();
}
function stopTimer(){
  secondsElapsed = 0;
  setTime()
  clearInterval(interval);
  renderTime();
}
function getFormatedMinutes(){
  var secondsLeft = totalSeconds - secondsElapsed;
  var minutesLeft = Math.floor(secondsLeft / 60);
  if (minutesLeft < 0){
    minutesLeft = "0" + minutesLeft;
  }
  return minutesLeft;
}
function getFormatedSeconds(){
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  var formatedSeconds;
  if(secondsLeft < 10){
    formatedSeconds= "0" + secondsLeft;
  }
  else{
    formatedSeconds = secondsLeft;
  }
  return formatedSeconds;

} 
function toggleStatus(){
  var checked = event.target.checked;
  if(statusToggle === checked){
    status="working";
  }
  else{
    status="Resting";
  }
  statusSpan.textContent=status;

}



playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click",pause);
stopButton.addEventListener("click",stopTimer);
statusToggle.addEventListener("change",toggleStatus);
