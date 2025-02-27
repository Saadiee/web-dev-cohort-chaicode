const toggleButton = document.getElementById('toggleButton');
const bulb = document.getElementById('bulb');
const statusText = document.getElementById('status');
const body = document.getElementById('body');

let isOn = false;

function toggleLight() {
  
  isOn = !isOn;
  
  if (isOn) {
    bulb.classList.remove('off');
    bulb.classList.add('on');
    body.classList.add('light-on');
    statusText.textContent = 'Status: On';
    toggleButton.textContent = 'Turn Off';
    body.classList.remove('dark-mode');

  } else {
    bulb.classList.remove('on');
    bulb.classList.add('off');
    body.classList.remove('light-on');
    body.classList.add('dark-mode');
    statusText.textContent = 'Status: Off';
    toggleButton.textContent = 'Turn On';
  }
}
toggleLight();
toggleButton.addEventListener('click',toggleLight);