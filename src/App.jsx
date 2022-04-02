import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes, routes } from './routes';
import { AuthProvider } from 'contexts/JWTAuthContext';

import 'styles/index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-circular-progressbar/dist/styles.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>{renderRoutes(routes)}</Router>
    </AuthProvider>
  );
};

export default App;
