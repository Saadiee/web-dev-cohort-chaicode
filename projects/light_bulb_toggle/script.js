const toggleButton = document.getElementById('toggleButton');
const bulb = document.getElementById('bulb');
const statusText = document.getElementById('status');
const body = document.getElementById('body');

let isOn = false;


toggleButton.addEventListener('click', function() {
  
  isOn = !isOn;
  
  if (isOn) {
    bulb.classList.remove('off');
    bulb.classList.add('on');
    body.classList.add('light-on');
    statusText.textContent = 'Status: On';
    toggleButton.textContent = 'Turn Off';
  } else {
    bulb.classList.remove('on');
    bulb.classList.add('off');
    body.classList.remove('light-on');
    statusText.textContent = 'Status: Off';
    toggleButton.textContent = 'Turn On';
  }
});