// gW-ZNOgi40KmlG6puveG

// const BASE_URL = 'https://the-one-api.dev/v2';
// const END_POINT = 'character';
// const KEY = 'gW-ZNOgi40KmlG6puveG';

// function getCharacter() {
//     const param = new URLSearchParams({
//         limit: 30,
//         page: 1,
//     });

// const option = {
//     method: 'GET',
//     headers: {
//         Authorizacion: `Bearer ${KEY}`,
//     }
// }

//     fetch(`${BASE_URL}${END_POINT}?${param}`, option).then(res => console.log(res));
// }

// getCharacter()

// const target = document.querySelector('.js-guard');
// let options = {
//   root: null,
//   rootMargin: "200px",
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(callback, options);
// function callback (evt) {
//   console.log(evt)
// }


// const list = document.querySelector('.js-list');
// const loadMore = document.querySelector('.js-load');

// const BASE_URL = 'https://api.themoviedb.org/3/';
// const END_POINT = 'trending/movie/day';
// const API_KEY = 'e0e97641121feb55735c3e871118ffda';
// let currentPage = 0;

// loadMore.addEventListener('click', onLoadBtn);

// function onLoadBtn() {
//   currentPage += 1;
//   getTrending(currentPage)
//     .then(data => {
//       list.insertAdjacentHTML('beforeend', createMarkup(data.results));
      
      
//       if (data.page === data.total_pages) {
//         loadMore.hidden = true;
//     }
//     })
//     .catch(err => console.log(err));
// }

// function getTrending(page = 1) {
//   return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(
//     resp => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     }
//   );
// }

// getTrending()
//   .then(data => {
//     list.insertAdjacentHTML('beforeend', createMarkup(data.results));
//     observer.observe(target)
//     if (data.page !== data.total_pages) {
//         loadMore.hidden = false;
//     }
// })
//   .catch(err => console.log(err));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title }) =>
//         `<li>
//   <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}">
//   <h2>${title}</h2>
//   </li>`
//     )
//     .join('');
// }

// let counter = 1;
// document.addEventListener('scroll', onScroll);


// function onScroll() {
//     counter += 1;
//     console.log(counter)
// }


const list = document.querySelector('.js-list');

const target = document.querySelector('.js-guard');

const BASE_URL = 'https://api.themoviedb.org/3/';
const END_POINT = 'trending/movie/day';
const API_KEY = 'e0e97641121feb55735c3e871118ffda';



let options = {
  root: null,
  rootMargin: "200px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(onLoad, options);

function onLoad (evt) {
  console.log(evt)
}


function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title }) =>
        `<li>
  <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}">
  <h2>${title}</h2>
  </li>`
    )
    .join(" ");
}


function getTrending(page = 1) {
  return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(
    (resp) => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    }
  );
}

getTrending()
  .then(data => {
    
    list.insertAdjacentHTML('beforeend', createMarkup(data.results));
    observer.observe(target);
   
})
  .catch(err => console.log(err));



