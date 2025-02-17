// ************************** MY-CODE ************************************

// function Submit(){
//     const nameElement = document.getElementById("name");
//     const emailElement = document.getElementById("email");
//     const reviewTextElement = document.getElementById("review");
//     const reviewBoard = document.querySelector(".reviews");
//     let name = nameElement.value;
//     let email = emailElement.value;
//     let reviewText = reviewTextElement.value;
//
//     let boardName = document.createElement("p");
//     boardName.classList.add("review-card-name");
//     let boardEmail = document.createElement("p")
//     boardName.classList.add("review-card-email");
//     let boardReview = document.createElement("p")
//     boardReview.classList.add("review-card-text");
//     let reviewCard = document.createElement('div')
//     reviewCard.classList.add("review-card")
//
//     boardName.innerHTML = name;
//     boardEmail.innerHTML = email;
//     boardReview.innerHTML = reviewText;
//
//     reviewCard.append(boardName);
//     reviewCard.append(boardEmail);
//     reviewCard.append(boardReview);
//     reviewBoard.appendChild(reviewCard);
// }

// ************************** MY-CODE REVIEWED BY DEEPSEEK ************************************


function handleReviewSubmission() {
    // Input Elements
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const reviewTextarea = document.getElementById("review");

    // Values
    const reviewerName = nameInput.value.trim();
    const reviewerEmail = emailInput.value.trim();
    const reviewContent = reviewTextarea.value.trim();

    // Validation check
    if (!reviewerName || !reviewerEmail || !reviewContent) {
        alert("Please fill in all fields");
        return;
    }

    // Create review card elements
    const reviewCard = document.createElement('div');
    reviewCard.classList.add("review-card");

    const nameElement = document.createElement("p");
    nameElement.classList.add("review-card-name");
    nameElement.textContent = reviewerName;

    const emailElement = document.createElement("p");
    emailElement.classList.add("review-card-email");
    emailElement.textContent = reviewerEmail;

    const reviewTextElement = document.createElement("p");
    reviewTextElement.classList.add("review-card-text");
    reviewTextElement.textContent = reviewContent;

    // Assemble card
    reviewCard.append(nameElement, emailElement, reviewTextElement);

    // Add to review board
    const reviewContainer = document.querySelector(".reviews");
    reviewContainer.prepend(reviewCard); // Show newest first

    // Clear form fields
    nameInput.value = '';
    emailInput.value = '';
    reviewTextarea.value = '';

    reviewCard.scrollIntoView({ behavior: 'smooth' });
}