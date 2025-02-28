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
    if(index >= totalImages) index = 0; 
    if(index < 0) index = totalImages - 1;
    
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







// ********************AI-Generated Code********************************
// const imageElement = document.querySelector(".carousel-images img");
// const captionElement = document.querySelector(".caption");
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");
// const carouselContainer = document.querySelector(".carousel");
// const timerElement = document.getElementById("timer");
// const dots = document.querySelectorAll(".dot");

// const images = [
//     { src: "image1.jpg", caption: "Caption for Image 1", alt: "this is an image 1" },
//     { src: "image2.jpg", caption: "Caption for Image 2", alt: "this is an image 2" },
//     { src: "image3.jpg", caption: "Caption for Image 3", alt: "this is an image 3" },
//     { src: "image4.jpg", caption: "Caption for Image 4", alt: "this is an image 4" }
// ];

// let currentImageIndex = 0;
// const slideInterval = 3; // seconds
// let timeCountdown = slideInterval;
// let intervalId, countdownId;

// // ✅ Function to show image & update everything
// function showImage(index) {
//     // 🔄 Wrap around when reaching limits
//     if (index >= images.length) index = 0;
//     if (index < 0) index = images.length - 1;
    
//     currentImageIndex = index;
//     imageElement.src = images[index].src;
//     imageElement.alt = images[index].alt;
//     captionElement.textContent = images[index].caption;

//     // 🔥 Update dots
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[currentImageIndex].classList.add('active');

//     // ⏳ Reset countdown timer
//     timeCountdown = slideInterval;
//     updateTimerDisplay();
// }

// // ✅ Auto slide function
// function autoSlide() {
//     stopSlide();
//     intervalId = setInterval(() => {
//         showImage(currentImageIndex + 1);
//     }, slideInterval * 1000);

//     countdownId = setInterval(() => {
//         timeCountdown = timeCountdown === 0 ? slideInterval : timeCountdown - 1;
//         updateTimerDisplay();
//     }, 1000);
// }

// // ✅ Stop auto slide
// function stopSlide() {
//     clearInterval(intervalId);
//     clearInterval(countdownId);
// }

// // ✅ Update timer display
// function updateTimerDisplay() {
//     timerElement.textContent = `Next image in: ${timeCountdown + 1} seconds`;
// }

// // ✅ Event Listeners
// nextBtn.addEventListener("click", () => showImage(currentImageIndex + 1));
// prevBtn.addEventListener("click", () => showImage(currentImageIndex - 1));

// dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => showImage(index));
// });

// // ✅ Pause/resume auto-slide on hover
// carouselContainer.addEventListener("mouseenter", stopSlide);
// carouselContainer.addEventListener("mouseleave", autoSlide);

// // ✅ Start carousel
// showImage(currentImageIndex);
// autoSlide();
