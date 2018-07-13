//Init UI
const ui = new UI();
//Init Auth
const auth = new Auth();
//Init favorite news
const news = new FavoriteNews();
//Init news-store
const newsStore = NewsStore.getInstance();

const newsContainer = document.querySelector('.news-container');
const removeAllNewsBtn = document.querySelector('.remove-all-news');



//Events
window.addEventListener('load', onLoad);
newsContainer.addEventListener('click',onRemoveFromFavorite);
removeAllNewsBtn.addEventListener('click',onRemoveAllNewsBtn);


function onLoad(e) {
    news.getFavoriteNews()
        .then(favoriteNews => {
            return new Promise((resolve,reject)=> {
                if(favoriteNews.size === 0) {
                    ui.showInfo('No Favorite News')
                } else resolve(favoriteNews)
            })
            .then(favoriteNews => {
                favoriteNews.forEach((doc) => {
                    ui.addFavoriteNews(doc.data(),doc.id)
                })
            })
    })
        .catch(err => console.log(err))
}

function onRemoveFromFavorite(e) {
    if(e.target.classList.contains('remove-favorite')) {
        e.target.closest('.col').remove();
        const id = e.target.dataset.id;
        news.deleteNews(id)
            .then(ui.showToastRemoveFromFavorite)
            .then(
                news.getFavoriteNews()
                    .then(favoriteNews => {
                        if(favoriteNews.size === 0)ui.showInfo('No Favorite News')
                    })
            )
            .catch(err => console.log(err))

    }
}

function onRemoveAllNewsBtn(e) {
    newsContainer.innerHTML = '';
    news.getFavoriteNews()
        .then(docs => {
            docs.forEach(doc => {
                news.deleteNews(doc.id)
            })
        });
}
