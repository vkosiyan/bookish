import tokenService from './tokenService';

const BASE_URL = '/api/books'

export function create(book){
    return fetch(BASE_URL, {
        method: 'POST',
        body: book, // our info from the form
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json())

}

export function getAll() {
    return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => res.json());
  }