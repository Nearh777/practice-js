import axios from "axios";
import SlimSelect from 'slim-select';
import { fetchBreeds } from "./cat-api";


const refs = {
    breedsId: document.querySelector('breed-select'),
}

axios.defaults.headers.common["x-api-key"] = "live_afZSKZPognhiIBuKmmSTbiQ1yVBzMX4jiLMHISvvju2nQMRJO0zRpot55HiQO8i5";

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/breeds';

new SlimSelect ({
    select: '#breed-item',
    settings: {
        hideSelected: true,
      }
    
})

let arrBreedsId = [];

fetchBreeds()
.then(
    data => {
        data.forEach(element => {
            arrBreedsId.push({text: element.name, value: element.id});
        });
        console.log(data)
    })

