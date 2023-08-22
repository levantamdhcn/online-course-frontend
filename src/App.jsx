import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes, routes } from './routes';
import { AuthProvider } from 'contexts/JWTAuthContext';

import 'styles/index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-circular-progressbar/dist/styles.css';
import { SubjectProvider } from 'contexts/SubjectContext';
import { CourseProvider } from 'contexts/CourseContext';

const App = () => {
  return (
    <AuthProvider>
      <CourseProvider>
        <SubjectProvider>
          <Router>{renderRoutes(routes)}</Router>
        </SubjectProvider>
      </CourseProvider>
    </AuthProvider>
  );
};

export default App;
