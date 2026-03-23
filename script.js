const apiKey = "JERy7NQ3U90I5HsYxp2x1lxFxztkUQ_401LVSvSCICPTqCL5";

const newsContainer = document.getElementById("news-container");

function getNews(){

const url = `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`;

fetch(url)
.then(res => res.json())
.then(data => {

newsContainer.innerHTML = "";

if(!data.news){
newsContainer.innerHTML = "<p>No news available</p>";
return;
}

data.news.forEach(article => {

const card = `
<div class="news-card">
<img src="${article.image || ''}">
<h3>${article.title}</h3>
<p>${article.description || ''}</p>
<a href="${article.url}" target="_blank">Read More</a>
</div>
`;

newsContainer.innerHTML += card;

});

})
.catch(err => {
console.error(err);
newsContainer.innerHTML = "<p>Failed to load news</p>";
});

}

getNews();

function searchNews(){

const query = document.getElementById("search-input").value;

const url = `https://api.currentsapi.services/v1/search?keywords=${query}&apiKey=${apiKey}`;

fetch(url)
.then(res => res.json())
.then(data => {

newsContainer.innerHTML = "";

if(!data.news){
newsContainer.innerHTML = "<p>No results found</p>";
return;
}

data.news.forEach(article => {

const card = `
<div class="news-card">
<img src="${article.image || ''}">
<h3>${article.title}</h3>
<p>${article.description || ''}</p>
<a href="${article.url}" target="_blank">Read More</a>
</div>
`;

newsContainer.innerHTML += card;

});

})
.catch(err => {
console.error(err);
newsContainer.innerHTML = "<p>Search failed</p>";
});

}