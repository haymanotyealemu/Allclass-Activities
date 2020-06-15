var butnincEl = document.querySelector("#increment");

var btndecEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

var count = 0;

function setCounterText(){
    countEl.textContent = count;
}
butnincEl.addEventListener("click",function(){
    count++;
    setCounterText();
});
btndecEl.addEventListener("click",function(){
    if (count > 0){
        count--;
        setCounterText();
    }
});



