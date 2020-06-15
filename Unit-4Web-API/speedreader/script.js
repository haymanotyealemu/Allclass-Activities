var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

var words = poem.split(" ");
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var bodyEl = document.createElement("div");
var i = 0;


function prepareRead() {
  // Create the countdown timer.
  
    var timeLeft = 5;
    var timeInterval = setInterval(function(){
    timeLeft--;
    timerEl.textContent = timeLeft + "seconds remaining";
    if (timeLeft === 0){
        timerEl.textContent =  "";
        speedRead();
        clearInterval  (timeInterval);
    }

},1000);

}

function speedRead() {
  // Print words to the screen one at a time.
    mainEl.appendChild(bodyEl);
    var poemInterval = setInterval(function(){
        if (words[i] === undefined){
        clearInterval(poemInterval);
        }
        else {
            mainEl.textContent = words[i];
            i++;
        }
    },500);
}
prepareRead();