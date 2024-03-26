import axios from "axios";



export function fetchBreeds() {
return axios.get()
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    // return response.json();
}); 
}