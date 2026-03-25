const apiKey = "ad3bd389f50043749560273da7f8610a";

const newsContainer = document.getElementById("news-container");

function getNews(category){

let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

fetch(url)
.then(response => response.json())
.then(data => {

newsContainer.innerHTML = "";

data.articles.forEach(article => {

if(!article.urlToImage || !article.description || article.description.length < 50) return;

let card = `
<div class="news-card">
<img src="${article.urlToImage}">
<h3>${article.title}</h3>
<p>${article.description}</p>

<a href="${article.url}" target="_blank">Read More</a>

<button class="summarise-btn"
data-text="${(article.title + ' ' + article.description).replace(/"/g,'&quot;')}">
Summarise
</button>

</div>
`;

newsContainer.innerHTML += card;

});

});
}

getNews("general");

function searchNews(){

let query = document.getElementById("search-input").value;

let url = `https://newsapi.org/v2/everything?qInTitle=${query}&language=en&sortBy=relevancy&pageSize=20&apiKey=${apiKey}`;

fetch(url)
.then(response => response.json())
.then(data => {

newsContainer.innerHTML = "";


if(data.articles.length === 0){
newsContainer.innerHTML = "<h2>No news found</h2>";
return;
}
data.articles.forEach(article => {

document.getElementById("search-input").value = "";

let card = `
<div class="news-card">
<img src="${article.urlToImage}">
<h3>${article.title}</h3>
<p>${article.description}</p>
<a href="${article.url}" target="_blank">Read More</a>
</div>
`;

newsContainer.innerHTML += card;

});

});

}

function summarizeNews(text){

localStorage.setItem("newsText", text);

window.location.href = "summary.html";

}

document.addEventListener("click", function(e){

if(e.target.classList.contains("summarise-btn")){

let text = e.target.getAttribute("data-text");

localStorage.setItem("newsText", text);

window.location.href = "summary.html";

}

});