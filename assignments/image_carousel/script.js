let imageElement = document.querySelector(".carousel-images img");
let captionElement = document.querySelector(".caption");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const carouselContainer = document.querySelector(".carousel");
const timerElement = document.getElementById("timer");
const dots = document.querySelectorAll(".dot");
const images = [
    { src: "image1.jpg", caption: "Caption for Image 1", alt: "this is an image 1"},
    { src: "image2.jpg", caption: "Caption for Image 2", alt: "this is an image 2"},
    { src: "image3.jpg", caption: "Caption for Image 3", alt: "this is an image 3"},
    { src: "image4.jpg", caption: "Caption for Image 4", alt: "this is an image 4"}
];

let currentImageIndex = 0;
let totalImages = images.length;
let slideInterval = 3;
let timeCountdown = slideInterval;
let intervalId, countdownId;

function showImage(index) {
    if(index >= totalImages){
        index = 0; 
    }else if(index < 0){
        index = totalImages - 1;
    }
    currentImageIndex = index;
    imageElement.src = images[index].src;
    imageElement.alt = images[index].alt;
    captionElement.textContent = images[index].caption; // ✅ Added caption update
    
    timeCountdown = slideInterval;
    updateTimerDisplay();
    dots.forEach(dot => dot.classList.remove('active'));
    dots.forEach(dot=>{
        if(currentImageIndex === Number(dot.dataset.index)) {dot.classList.add('active')}
    })
}

function autoSlide(){
    stopSlide();

    intervalId = setInterval(() => {
        currentImageIndex++;
        showImage(currentImageIndex);
    }, slideInterval * 1000);

    countdownId = setInterval(() => {
        if (timeCountdown === 0) {
            timeCountdown = slideInterval; // Reset countdown
        }
        timeCountdown--;
        updateTimerDisplay();
    }, 1000);
}


function updateTimerDisplay(){
    timerElement.innerText = `Next image in: ${timeCountdown + 1} seconds`;
}

function stopSlide(){
    clearInterval(intervalId);
    clearInterval(countdownId);
}
// Start or stop slideshow on mouse enter/leave
carouselContainer.addEventListener("mouseenter", ()=>{
    stopSlide()
    nextBtn.style.display = "block";
    previousBtn.style.display = "block";
})
carouselContainer.addEventListener("mouseleave",()=>{
    autoSlide();
    nextBtn.style.display = "none";
    previousBtn.style.display = "none";
})

nextBtn.addEventListener("click", () => {
    currentImageIndex++;
    showImage(currentImageIndex);
});

previousBtn.addEventListener("click", () => {    
    currentImageIndex--;
    showImage(currentImageIndex);
});

dots.forEach((dot) => {
    dot.addEventListener('click', ()=>{
        let index = Number(dot.dataset.index);
        showImage(index)
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active')
    })
});

showImage(currentImageIndex)
autoSlide()