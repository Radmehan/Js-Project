console.log("news website");
let searchForm = document.querySelector(".search");
let input = document.querySelector("#input");
let newsList = document.querySelector(".news-list");
searchForm.addEventListener("submit", retrieve);
function retrieve(e) {
    e.preventDefault();

    const apiKey = `4502b5e1b10b488f99a4abc72f717a0b`;
    let topic = input.value;
    let url = `http://newsapi.org/v2/top-headlines?sources=${topic}&apiKey=${apiKey}`;

    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
    
    console.log(topic);
}