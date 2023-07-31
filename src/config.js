const config = {
  // url: 'https://online-courses-web.herokuapp.com'
  url: window.location.origin.includes('localhost') ? 'http://localhost:5000/api' : 'https://api-elearning-portal.up.railway.app/api',
};

export default config;
