const BASE_KEY =
  'live_tPKLGO8JrKGQfcUXQQtbTRwBwGHbieMzyBwwGz9GXiyhW7PqH6cLJQl3UmDJfz19';

import axios from 'axios';
axios.defaults.headers.common['x-api-key'] = BASE_KEY;


 
export function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds').then(r => r.data);
};

export function fetchCatByBreed(breedId) {
    return axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then(response => response.data[0]);
};





