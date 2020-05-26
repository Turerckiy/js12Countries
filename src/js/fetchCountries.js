
const ErrorCode = {
  404: 'Ой-ой не работает',
};
const fetchCountries = searchQuery => {
  const baseUrl = 'https://restcountries.eu/rest/v2/name/';
  return fetch(baseUrl + searchQuery)

 

};



export default fetchCountries;
// export const fetchCountries = (searchQuery) {
//   const baseUrl = 'https://restcountries.eu/rest/v2/name/';
//   return fetch(baseUrl + searchQuery).then(response => response.json());
// }






