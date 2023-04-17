const input = document.getElementById("input").value;

var searchButton = 
  document.getElementById("search-button").addEventListener("click", inputCriteria);

async function inputBox() {
  let input = await document.getElementById("input").value;
  console.log(input);
  return input;
}

const result = document.createElement("div");
result.setAttribute("id", "result");
// document.body.appendChild(result);
// console.log(result);



// search.addEventListener("click", inputCriteria);




async function getData() {
  const response = await fetch('http://127.0.0.1:8080/mvp');
  const data = await response.json();
  

    console.log(response);
  
  // console.log(data);
    return data;

};

//event listener for search button




//i want a function to search for input criteria in the json file


async function inputCriteria(e) {
    const data = await getData();
    const input = document.getElementById("input").value;
    const result = document.getElementById("result");
    const search = document.getElementById("button");
    //I want to search the mvp.json data for the value typed in the input box
    const filteredData = data.filter(item => item.player.toLowerCase().includes(input.toLowerCase()));
    console.log(filteredData);
    // console.log(input);
    // console.log(filteredData);
    result.innerHTML = "";
    filteredData.forEach(item => {
        const player = document.createElement('div');
        player.setAttribute("class", "player");
        player.innerText = `${item.player} - ${item.team} - ${item.year}`;
        result.appendChild(player);
    });



    console.log(input);
    // return item.player.toLowerCase().includes(input.toLowerCase());
    
};










