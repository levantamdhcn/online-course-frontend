const config = {
  url: window.location.origin.includes('localhost')
    ? 'http://online-courses-web.herokuapp.com'
    : window.location.origin
};

export default config;
