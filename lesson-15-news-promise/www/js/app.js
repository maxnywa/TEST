//init http
const http = new Http();
//Init UI
const ui = new UI();

//API key
const apiKey = '2c7ff3b4490046cea837de535149e6e3';

//Init elements
const selectCountry =  document.getElementById('country');
const selectCategory =  document.getElementById('category');
const selectSource =  document.getElementById('source');
const searchInput =  document.getElementById('search');
const searchBtn =  document.getElementById('searchBtn');

//All ivents
selectCountry.addEventListener('change',onChangeCountry);
selectCategory.addEventListener('change',onChangeCountry);
selectSource.addEventListener('change',onChangeSource);
searchBtn.addEventListener('click',onSearch);

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
            response.articles.forEach(news => ui.addNews(news));
        })
        .catch(err => ui.showError(err));
}

function onChangeSource(e) {
    ui.showLoader();

    http.get(`https://newsapi.org/v2/top-headlines?sources=${selectSource.value}&apiKey=${apiKey}`)
        .then(response =>{
                ui.clearContainer();
                response.articles.forEach(news => ui.addNews(news));
            })
        .catch(err => ui.showError(err));
}

function onSearch() {
    ui.showLoader();

    http.get(`https://newsapi.org/v2/everything?q=${searchInput.value}&apiKey=${apiKey}`)
        .then(response =>{
        if(response.totalResults) {
            ui.clearContainer();
            response.articles.forEach(news => ui.addNews(news));
        } else ui.showInfo('По вашему запрсу новостей не найдено');
        })
        .catch(err => ui.showError(err));
}