// Global app controller

import Search from './models/Search';
import {elements,renderLoader, clearLoader} from "./view/base";
import * as searchView from "./view/searchView"

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Favorite recipe object
 * */

const state = {};

const controlSearch = async() => {
    const query = searchView.getSearchInputValue();

    if(query){
        state.search = new Search(query);


        searchView.clearForm();
        searchView.clearResults();
        renderLoader(elements.searchRes);


        await state.search.getResult();

        searchView.renderResult(state.search.result);
        clearLoader();
    }
};

//Set events
elements.searchForm.addEventListener('submit',e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click',e => {
    const btn = e.target.closest('.btn-inline');

    if(btn){
        const goToPage = parseInt(btn.dataset.goto);
        searchView.clearResults();
        searchView.renderResult(state.search.result, goToPage);

    }
});