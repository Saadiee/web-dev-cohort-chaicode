document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('mainHeading');
    
    const originalColor = getComputedStyle(heading).color;
    
    function changeColor(buttonId) {
      if (buttonId === 'resetButton') {
        heading.style.color = originalColor;
      } else {
        const color = buttonId.replace('Button', '');
        heading.style.color = color;
      }
    }
    
    const buttons = document.querySelectorAll('.color-buttons button');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
    
        changeColor(this.id);
      });
    });
  });