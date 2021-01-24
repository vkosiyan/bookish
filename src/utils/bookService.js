import tokenService from './tokenService';

const BASE_URL = '/api/books'

export function create(book){
  console.log('I AM BOOK IN SERVICE', book)
    return fetch(BASE_URL + 'search', {
      method: "POST", 
      body: JSON.stringify(book),
      // headers: {
      //   'Authorization': 'Bearer ' + tokenService.getToken()
      // }
      
    }).then(res => {
      console.log("Request complete! response:", res);
    });
  }    


export function getAll() {
    return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => res.json());
  }