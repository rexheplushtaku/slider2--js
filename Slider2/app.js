const carousel = document.querySelector(".carousel");
firstImg = document.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if(icon.id == "left") {
            carousel.scrollLeft -= firstImgWidth;
        }else {
            carousel.scrollLeft += firstImgWidth;
        }
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let possitionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - possitionDiff;
}

const draggStop = () => {
    isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", draggStop);
