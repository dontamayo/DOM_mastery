const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myPurple = document.getElementsByTagName('li');


myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

for(let i = 0; i < myPurple.length; i++){
myPurple[i].style.color = 'pink'
}
