const apiKey = "6b306bb099d8e1f7756842bff937b644";

const newsContainer = document.getElementById("news-container");

function getNews(category){

let url = `https://api.allorigins.win/raw?url=https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&token=${apiKey}`;

fetch(url)
.then(response => response.json())
.then(data => {

newsContainer.innerHTML = "";

data.articles.forEach(article => {

if(!article.image || !article.description || article.description.length < 50) return;

let card = `
<div class="news-card">
<img src="${article.image}">
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

let url = `https://api.allorigins.win/raw?url=https://gnews.io/api/v4/search?q=${query}&lang=en&max=20&token=${apiKey}`;

fetch(url)
.then(response => response.json())
.then(data => {

newsContainer.innerHTML = "";

data.articles.forEach(article => {

if(!article.image || !article.description) return;

let card = `
<div class="news-card">
<img src="${article.image}">
<h3>${article.title}</h3>
<p>${article.description}</p>
<a href="${article.url}" target="_blank">Read More</a>
</div>
`;

newsContainer.innerHTML += card;

});

});

}