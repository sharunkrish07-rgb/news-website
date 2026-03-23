const apiKey = "6b306bb099d8e1f7756842bff937b644";

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

data.articles.forEach(article => {

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