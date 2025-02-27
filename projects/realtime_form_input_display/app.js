document.addEventListener('DOMContentLoaded', function() {
  // Get references to all input elements
  const nameInput = document.getElementById('nameInput');
  const jobInput = document.getElementById('jobInput');
  const ageInput = document.getElementById('ageInput');
  const bioInput = document.getElementById('bioInput');
  
  // Get references to all display elements
  const nameDisplay = document.getElementById('nameDisplay');
  const jobDisplay = document.getElementById('jobDisplay');
  const ageDisplay = document.getElementById('ageDisplay');
  const bioDisplay = document.getElementById('bioDisplay');
  
  
  // Name input event listener
  nameInput.addEventListener('input', function() {
    if (nameInput.value.trim() !== '') {
      nameDisplay.textContent = nameInput.value;
    } else {
      nameDisplay.textContent = "Not provided";
    }
  });
  
  // Job input event listener
  jobInput.addEventListener('input', function() {
    if (jobInput.value.trim() !== '') {
      jobDisplay.textContent = jobInput.value;
    } else {
      jobDisplay.textContent = "Not provided";
    }
  });
  
  // Age input event listener
  ageInput.addEventListener('input', function() {
    if (ageInput.value.trim() !== '') {
      ageDisplay.textContent = ageInput.value;
    } else {
      ageDisplay.textContent = "Not provided";
    }
  });
  
  // Bio input event listener
  bioInput.addEventListener('input', function() {
    if (bioInput.value.trim() !== '') {
      bioDisplay.textContent = bioInput.value;
    } else {
      bioDisplay.textContent = "Not provided";
    }
  });
}
);