import tokenService from './tokenService';

const BASE_URL = '/api/books/'

export function create(book){
  console.log('Hitting Books Service')
  console.log('I AM PROPS IN BOOK SERVICE', book)
  console.log('I AM BOOKID in BOOK SERVICE', book.id)
  
    return fetch(BASE_URL + book.id, {
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