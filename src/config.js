const config = {
  // url: 'http://localhost:5000/api'
  url: window.location.origin.includes('localhost') ? 'http://35.231.125.71/api' : 'https://api-elearning-portal.up.railway.app/api',
};

export default config;
