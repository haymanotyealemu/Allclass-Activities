var peoplistEl = document.querySelector("#people-list");
var addBtnEl = document.querySelector("#add-btn");
var nameEl = document.querySelector("#name");
var madalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");

var descriptionEl = document.querySelector("#description");
var saveBtn = document.querySelector("#save");
var closeEl = document.querySelector(".close");

var people = [{ name : "Bob"}];
var currentId = 0;

addBtnEl.addEventListener("click",function(event) {
    event.preventDefault();
    var name = nameEl.value;
    var li = document.createElement("li");
    li.id = people.length;
    li.innerHTML = name + " <button>edit</button>";
    people.push({ name: name });
    peoplistEl.append(li);
});

// event deligation

peoplistEl.addEventListener("click",function(event){
    
    if(event.target.matches("button")){
        event.preventDefault();
        madalEl.style.display = "block";
        currentId = parseInt(event.target.parentElement.id);
        var name = people[currentId].name;
        var description = people[currentId].description;
        modalNameEl.textContent = name;
        if(description){
            descriptionEl.value = description;
        }
        else {
            descriptionEl.value = "";
        }

    }

    
});
function close() {
    modalEl.style.display = "none";
}

closeEl.addEventListener("click",close);

saveBtn.addEventListener("click",function(event){
    event.preventDefault();
    people[currentId].description = descriptionEl.value;
    close();

});
document.addEventListener("click", function(event) {
    if (event.target === modalEl) {
    close();
    }
});