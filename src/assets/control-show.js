const myFunction = value => {
  console.log(value);
};

const almaCompot = document.getElementById('alma');
almaCompot.addEventListener('inputchange', e => {
  myFunction(e.detail);
});

// setInterval(() => {
//   if (almaCompot) {
//     almaCompot.error = true;
//   }
// }, 3000);

const okayButton = document.getElementById('okay-button');
const cancelButton = document.getElementById('cancel-button');
okayButton.addEventListener('clicked', e => {
  myFunction(e.detail);
});
cancelButton.addEventListener('clicked', e => {
  myFunction(e.detail);
});

const okayButtonDisabled = document.getElementById('okay-button-disabled');
const cancelButtonDisabled = document.getElementById('cancel-button-disabled');
okayButtonDisabled.addEventListener('clicked', e => {
  myFunction(e.detail);
});
cancelButtonDisabled.addEventListener('clicked', e => {
  myFunction(e.detail);
});

const darkSwitch = document.getElementById('dark-switch');
const lightSwitch = document.getElementById('light-switch');
const disabledSwitch = document.getElementById('disabled-switch');
darkSwitch.addEventListener('switched', e => console.log(e.detail));
lightSwitch.addEventListener('switched', e => console.log(e.detail));
disabledSwitch.addEventListener('switched', e => console.log(e.detail));

const lightSelect = document.getElementById('light-select');
lightSelect.addEventListener('opened', (e) => {
  console.log(e.detail);
});
lightSelect.addEventListener('changed', (e) => {
  console.log(e.detail);
});

const myCheckBox = document.getElementById('my-moco-checkbox');
myCheckBox.addEventListener('changed', (e) => {
  console.log(e.detail);
});

const myRadioButton = document.getElementById('my-moco-radiobutton');
myRadioButton.addEventListener('changed', (e) => {
  console.log(e.detail);
});


const mocoProgress = document.getElementById("moco-progress");
const mocoProgressText = document.getElementById("moco-progress-text");
const mocoProgress2 = document.getElementById("moco-progress-2");
const mocoProgressText2 = document.getElementById("moco-progress-text-2");
let v = 0;
const myInterval = setInterval(() => {
  v = v + 1;
  mocoProgress.setAttribute("percentage", v);
  mocoProgressText.innerText = v + "%";
  mocoProgress2.setAttribute("percentage", v);

  if (v >= 100) {
    mocoProgressText2.innerText = "done";
    clearInterval(myInterval);
  }
}, 250);