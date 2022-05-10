const config = {
  // url: 'https://online-courses-web.herokuapp.com'
  url: window.location.origin.includes('localhost') ? 'http://localhost:5000' : 'https://online-courses-web.herokuapp.com',
};

export default config;
