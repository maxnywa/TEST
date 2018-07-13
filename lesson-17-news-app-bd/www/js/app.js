//init http
const http = new Http();
//Init UI
const ui = new UI();
//Init Auth
const auth = new Auth();
//Init favorite news
const news = new FavoriteNews();
//Init news-store
const newsStore = NewsStore.getInstance();

//API key
const apiKey = '2c7ff3b4490046cea837de535149e6e3';

//Init elements
const selectCountry =  document.getElementById('country');
const selectCategory =  document.getElementById('category');
const selectSource =  document.getElementById('source');
const searchInput =  document.getElementById('search');
const searchBtn =  document.getElementById('searchBtn');
const logout =  document.querySelector('.logout');
const newsContainer = document.querySelector('.news-container')


//All ivents

selectCountry.addEventListener('change',onChangeCountry);
selectCategory.addEventListener('change',onChangeCountry);
selectSource.addEventListener('change',onChangeSource);
searchBtn.addEventListener('click',onSearch);
logout.addEventListener('click',onLogout);
newsContainer.addEventListener('click',onAddToFavorite);


//Check auth state
firebase.auth().onAuthStateChanged(function(user) {
    if (!user){
        window.location = 'login.html';
    }
});

//Make Source Select
(function makeSelect() {
    http.get(`https://newsapi.org/v2/sources?apiKey=${apiKey}`)
        .then (response =>{
            for (let i = 0; i <= 10; i++){
                let source = response.sources[ Math.floor( Math.random() * response.sources.length )];
                selectSource.appendChild(new Option(source.name,source.id));
            }
            $(document).ready(function(){
                $('select').formSelect();
            })
        })
        .catch(err => ui.showError(err))
    }());

//Hendlers event
function onChangeCountry(e) {
    ui.showLoader();

    const country = selectCountry.value ? `country=${selectCountry.value}`:'';
    let category;
    if (selectCategory.value){
        category = country ? `&category=${selectCategory.value}`:`category=${selectCategory.value}`
    }else category = '';

    http.get(`https://newsapi.org/v2/top-headlines?${country}${category}&apiKey=${apiKey}`)
        .then(response =>{
            ui.clearContainer();
            response.articles.forEach((news,index) => ui.addNews(news,index));
            return response
        })
        .then(response => newsStore.setNews(response.articles))
        .catch(err => ui.showError(err));
}

function onChangeSource(e) {
    ui.showLoader();

    http.get(`https://newsapi.org/v2/top-headlines?sources=${selectSource.value}&apiKey=${apiKey}`)
        .then(response =>{
                ui.clearContainer();
                response.articles.forEach((news,index) => ui.addNews(news,index));
                return response
            })
        .then(response => newsStore.setNews(response.articles))
        .catch(err => ui.showError(err));
}

function onSearch(e) {
    ui.showLoader();

    http.get(`https://newsapi.org/v2/everything?q=${searchInput.value}&apiKey=${apiKey}`)
        .then(response =>{
        if(response.totalResults) {
            ui.clearContainer();
            response.articles.forEach((news,index) => ui.addNews(news,index));
            return response;
        } else ui.showInfo('По вашему запрсу новостей не найдено');
        })
        .then(response => newsStore.setNews(response.articles))
        .catch(err => ui.showError(err));
}

function onLogout(e) {
    auth.logout()
        .then(() => window.location = 'login.html')
        .catch(err => console.log(err));
}

function onAddToFavorite(e) {
    if(e.target.classList.contains('add-favorite')){
        const index = e.target.dataset.index;
        const oneNews = newsStore.getNews()[index];

        news.addFavoriteNews(oneNews)
            .then(ui.showToastAddToFavorite())
            .catch(err => console.log(err))
        // news.getFavoriteNews()
        //     .then(favoriteNews => {
        //         favoriteNews.forEach((doc) => {
        //             if(doc.data().title === oneNews.title) ui.showToastErrFromFavorite();
        //             else {
        //                 news.addFavoriteNews(oneNews)
        //                     .then(ui.showToastAddToFavorite())
        //             }
        //         })
        //     })

    }
}