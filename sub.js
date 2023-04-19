


const app = document.getElementById('app');
let feedbackContainer = document.querySelector('.feedback-container');
let inputContainer  = document.querySelector('.input-container');
let input = document.querySelector('#input');
let letters = [];
let numbers = []; 




function renderInput() {
  const _input = document.createElement('search');
  _input.id = 'input';
  _input.addEventListener('keyup', handleKeyup);
  inputContainer.append(_input);
}
// const input = document.getElementById("input");



const results = document.getElementById("results");

const search = document.getElementById("search-button");

renderBtn(search);

search.addEventListener("click", function() {

console.log(input.value);

});

function renderBtn() {
  const btn = document.createElement('button');
  btn.addEventListener('click', handleClick);
  btn.innerText = 'Click Me';
  // app.append(btn);
}

function renderInputContainer() {
  const div = document.createElement('div');
  div.className = 'input-container';
  inputContainer = div
  // app.append(div);
  renderInput(inputContainer);
};




function renderFeedbackContainer() {
  const div = document.createElement('div');
  div.className = 'feedback-container';
  feedbackContainer = div;
  // app.append(div);
}

function loadHTMLElements() {
  renderInputContainer();
  renderBtn();
  renderFeedbackContainer();
}
loadHTMLElements();
function handleClick() {
  input = inputContainer.querySelector('#search');
  let feedback;
  if (letters.length && numbers.length) {
    feedback = ['a mix of letters and numbers', 'strings'];
  }
  if (letters.length && !numbers.length) {
    feedback = ['only letters', 'strings'];
  }
  if (!letters.length && numbers.length) {
    feedback = ['only numbers', 'numbers'];
  }
  if (!letters.length && !numbers.length) {
    feedback = ['no characters at all', 'silence'];
  }
  renderFeedback(`The input "${search.value}" is comprised of ${feedback[0]} and will be sent to an endpoint that can handle ${feedback[1]}.`);
  letters = [];
  numbers = [];
  search.value = '';
}

function handleKeyup(e) {
  const target = e.target.value;

  // cache just the final letter in the input
  const value = target[target.length - 1];

  // quick trick to see if `value` can be multiplied by a number
  const finalValue = value * 1;

  // this is a number
  if (!(isNaN(finalValue))) {
    numbers.push(finalValue);
  }

  // this is a letter
  if (isNaN(finalValue)) {
    letters.push(value);
  }
}

function renderFeedback(str) {
  feedbackContainer.innerHTML = '';
  input.value = '';
  const div = document.createElement('div');
  div.id = 'feedback';
  div.innerText = str;
  div.className = 'feedback';
  // app.appendChild(div);
}





async function getData() {
    const response = await fetch('/api/mvp.json');
    
    
  
      console.log(response);
      return response.json();
};



getData();
// let input = document.getElementById("input").value;

//I need my search button to search the json file for the input provided by the user and return the results to the results div.

const finalValue = document.getElementById("results");



JSON.stringify() === JSON.stringify();

// let filteredData = JSON.obj.filter(item => item.player.toLowerCase().includes(_input.toLowerCase()));
