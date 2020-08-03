// eslint-disable-next-line camelcase
const URL_BACkEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://akioflix.herokuapp.com';

export default {
  URL_BACkEND_TOP,
};
