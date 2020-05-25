import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
defaultModules.set(PNotifyMobile, {});

import { addMarkup, renderCountryList } from './addMarkup';
import { refs } from './refs';

const fetchCountries = searchQuery => {
  refs.countries.innerHTML = ' ';
  const baseUrl = 'https://restcountries.eu/rest/v2/name/';
  return fetch(baseUrl + searchQuery)
    .then(response => {
      // (response.status < 400) && response.json();
      // (response.status < 400) && (response.json());
      response.status > 400 && alert();
      if (response.status < 400) {
        return response.json();
      }
    })
    .then(data => {
      data.length > 10 &&
        alert('Слишком много совпадений. Конкретизируйте запрос');
      data.length < 2 && addMarkup(data[0]);
      data.length > 2 && data.length < 10 && renderCountryList(data);
    })
    .catch(error => console.error('ERROR---', error));
};

export default fetchCountries;


// export const fetchCountries = (searchQuery) {
//   const baseUrl = 'https://restcountries.eu/rest/v2/name/';
//   return fetch(baseUrl + searchQuery).then(response => response.json());
// }