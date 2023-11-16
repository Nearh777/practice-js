import { Notify } from 'notiflix/build/notiflix-notify-aio';


import { getGalleryImg } from './getGalleryImg';
// import { markupCard } from "./card";
import { createMarkup } from './card';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.js-load');

const objOptionArgument = {
  nameQuery: '',
  page: 1,
  per_page: 40,
  category: 'all',
  colors: 'all',
  orientation: 'all',
  image_type: 'all',
};

let currentPage = 1;

loadMore.addEventListener('click', onLoad);

function onLoad() {
    currentPage += 1;
    getGalleryImg(currentPage)
    .then(({ hits, total }) =>
        gallery.insertAdjacentHTML('beforeend', createMarkup(hits))
      )
      .catch(err => console.log(err));
}



searchForm.addEventListener('submit', onSearch);



// function onSearch(evt) {
//   evt.preventDefault();

//   const { searchQuery } = evt.currentTarget.elements;

//   const query = searchQuery.value;

//   getGalleryImg(query)
//     .then(data =>
//       gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits))
//     )
//     .catch(err => console.log(err));
//   searchForm.reset();
// }


function onSearch(evt) {
    evt.preventDefault();
  
    nameQuery = evt.target.elements.searchQuery.value.trim();
    if (nameQuery === '') {
        return Notify.failure('Enter the search request');
    } else {
        objOptionArgument.nameQuery = nameQuery;

        getGalleryImg(objOptionArgument)
      .then(({ hits, total }) =>
        gallery.insertAdjacentHTML('beforeend', createMarkup(hits))
      )
      .catch(err => console.log(err));
    searchForm.reset();

    }
  
    
  
    
  }
