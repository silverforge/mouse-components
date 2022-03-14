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
