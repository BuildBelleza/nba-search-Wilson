const searchButton = document.getElementById("search-button");
// searchButton.addEventListener("click", inputCriteria);

const result = document.createElement("div");
result.setAttribute("id", "result");
// document.body.appendChild(result);
// console.log(result);

const search = document.getElementById("button"); 
// (search.addEventListener("click", inputCriteria));



async function getData() {
  const response = await fetch('http://127.0.0.1:8080/mvp');
  const data = await response.json();
  const input = await document.getElementById("input").value;

    console.log(input);
  
  // console.log(data);
    return data;

};



async function inputCriteria(e) {
    const data = await getData();
    const input = document.getElementById("input").value;
    console.log(input);
    return item.player.toLowerCase().includes(input.toLowerCase());
    
};








