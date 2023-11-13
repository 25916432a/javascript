//document.body.children[1].children[0].href = 'https://google.com';

//add element

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('p a'); //p a {color:red};
anchorElement.href = 'https://academind.com';


let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'go in It';

let fisrParagraph = document.querySelector('p');
fisrParagraph.append(newAnchorElement);

//remove element

let firstElement = document.querySelector('h1');

firstElement.remove();

//move element
fisrParagraph.parentElement.append(fisrParagraph);

console.log(fisrParagraph.innerHTML);

fisrParagraph.innerHTML = 'Hi, this is <strong>impotent</strong>';























let paragraphElement = document.querySelector('p');

function changeParagraphText(){
    paragraphElement.textContent = 'Clicked!';
    console.log('Paragraph clicked!');
}

paragraphElement.addEventListener('click',changeParagraphText);



let inputElement = document.querySelector('input');

function retrieveUserInput(event){

//let enteredText = inputElement.value;
let enteredText = event.target.value;
//let enteredText = event.data;
console.log(enteredText);
//console.log(event);

}
inputElement.addEventListener('input',retrieveUserInput);