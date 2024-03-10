// Books
const arrowLeftBook = document.getElementById("prevBtn");
const arrowRightBook = document.getElementById("nextBtn");
const allbooks = document.getElementById("books");
// News
const arrowLeftNews = document.getElementById("arrow-left-btn");
const arrowRightNews = document.getElementById("arrow-right-btn");
const allnews = document.getElementById("news-container");



// Books
arrowRightBook.addEventListener("click", (e) => {
    allbooks.scrollLeft += 200;
});

arrowLeftBook.addEventListener("click", (e) => {
    allbooks.scrollLeft -= 200 
})

// News
arrowRightNews.addEventListener("click", (e) => {
    allnews.scrollLeft += 200;
});

arrowLeftNews.addEventListener("click", (e) => {
    allnews.scrollLeft -= 200 
});

