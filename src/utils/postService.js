import tokenService from './tokenService';

const BASE_URL = '/api/posts'

export function create(post){
  console.log('I AM POST IN SERVICE', post)
    return fetch(BASE_URL, {
        method: 'POST',
        body: post, // our info from the form
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