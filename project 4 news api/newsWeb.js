console.log("Welcome to the news website");


//Initialize the news api
/*let source = 'bbc-news';
let apiKey='4502b5e1b10b488f99a4abc72f717a0b';


//grab the news container
let newsAccordian = document.getElementById("newsAccordian");

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/everything?sources=${source}&apiKey=${apiKey}`, true);

//what to do when response is ready

xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles=JSON.articles;
        console.log(articles);
        let newsHtml="";
        articles.forEach(function(element,index) {
            console.log(element,index);
           // console.log(article[news]);
            let news = `<div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button btn btn-link collapsed " type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                       <b>breaking news: ${index+1}</B> ${element["title"]}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                    data-bs-parent="#newsAccordion">
                    <div class="accordion-body">${element["content"]}. <a href="element['url'] target="_blank">Read more here </a> </div>
              
                </div>
            </div> `;
            newsHtml+=news;
            
        });
        newsAccordian.innerHTML=newsHtml;
    }
    else {
        console.log("some error occured");
    }
}
xhr.send()


//Inotialize the news api peramiters
// let source='bbc-news';
// let apiKey='4502b5e1b10b488f99a4abc72f717a0b';

//grab the news container
let newsAccordion=document.getElementById("newsAccordion");

//create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4502b5e1b10b488f99a4abc72f717a0b', true);

//What to do onload
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
    }
    else{
        console.log("Some error occuered");
    }
}

xhr.send();

let news=`<div class="accordion-item" >
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>`

*/

console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = '4502b5e1b10b488f99a4abc72f717a0b'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }

}
xhr.send();
console.log("We are done");


