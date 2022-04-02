const config = {
  url: window.location.origin.includes('localhost')
    ? window.location.origin
    : 'https://online-courses-web.herokuapp.com'
};

export default config;
