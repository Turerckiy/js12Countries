import dataListTemplate from './templates/dataListTemplate.hbs';
// console.log(dataListTemplate());
import { refs } from './refs';

export const addMarkup = data =>{
  refs.countries.innerHTML = ''
  refs.countries.insertAdjacentHTML('beforebegin', dataListTemplate(data));}

export const renderCountryList = data => {
  const countryList = `
  <ul class="countryList">
      ${renderCountryListItem(data)}
  </ul>
  `;
  refs.countries.insertAdjacentHTML('beforeend', countryList);
};

const renderCountryListItem = dataArr =>
  dataArr.reduce(
    (acc, item) => (acc += `<li class="countryListItem">${item.name}</li>`),'');
