import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import { refs } from './refs';

function hendleSearch(){refs.container.addEventListener('input', debounce(hendleInput, 500))}

const hendleInput = event => {
  event.preventDefault();
  fetchCountries(event.target.value)
  
  // .then(data => addMarkup(data))
};

export default hendleSearch;
