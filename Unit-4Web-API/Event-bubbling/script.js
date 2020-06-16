var prevbtnEl = document.querySelector(".prev");
var nextbtnEl = document.querySelector(".next");
var carousel =  document.querySelector(".carouselbox");
var imges = ["https://picsum.photos/300/200","https://picsum.photos/300/201","https://picsum.photos/300/202","https://picsum.photos/300/203"];

var index = 0;
var currentImage;

function navigate(direction){
    index = index + direction;
    if (index < 0){
        index = images.length - 1;
    }
    else if (index > images.length - 1){
        index = 0;

    }
    currentImage = images[index];
    carousel.style.backgroundImage = "url('" + currentImage + "')";

}
carousel.addEventListener("click",function(){
    window.location.href = images[index];
});

nextbtnEl.onclick= function(event) {
    event.stopPropagation();
  
    navigate(1);
};
  
prevbtnEl.addEventListener("click", function(event) {
    event.stopPropagation();
  
    navigate(-1);
});
  
navigate(0);