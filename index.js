const search = (input, data) => {
    const filteredData = data.filter(item => item.player.toLowerCase().includes(input.toLowerCase()));
    console.log(filteredData);
    return filteredData;
    };

    const render = (data) => {
        const result = document.getElementById("result");
        result.innerHTML = "";
        data.forEach(item => {
            const player = document.createElement('div');
            player.setAttribute("class", "player");
            player.innerText = `${item.player} - ${item.team} - ${item.year}`;
            result.appendChild(player);
        });
    };

    const handleSearch = async (e) => {
        const input = document.getElementById("input").value;
        const data = await getData();
        const filteredData = search(input, data);
        render(filteredData);
    };

    const getData = async () => {
        const response = await fetch('http://localhost:8080/api/mvp.json');
        const data = await response.json();
        console.log(data);
        return data;
    };