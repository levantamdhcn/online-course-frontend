import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes, routes } from './routes';
import { AuthProvider } from 'contexts/JWTAuthContext';
import { ChakraProvider } from '@chakra-ui/react';
import { toast, ToastContainer } from "react-toastify";

import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css'
import 'styles/index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-circular-progressbar/dist/styles.css';
import { SubjectProvider } from 'contexts/SubjectContext';
import { CourseProvider } from 'contexts/CourseContext';
import { theme } from 'theme';
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.log(error);
      return toast.error(`Something went wrong: ${error.message}`);
    },
  }),
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <CourseProvider>
            <SubjectProvider>
              <Router>{renderRoutes(routes)}</Router>
              <ToastContainer />
            </SubjectProvider>
          </CourseProvider>
        </QueryClientProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
