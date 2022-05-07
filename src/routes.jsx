import DefaultLayout from './layouts/DefaultLayout';
import { Fragment, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { lazy } from 'react';
import LoadingScreen from 'components/LoadingScreen';
import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import GuestGuard from 'components/GuestGuard';
import AuthGuard from 'components/AuthGuard';
import AdminGuard from 'components/AdminGuard';

export const renderRoutes = (routes = []) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes?.map((route, i) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => {
                return (
                  <Guard>
                    <Layout>
                      {route.routes ? renderRoutes(route.routes) : <Component {...props} />}
                    </Layout>
                  </Guard>
                );
              }}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export const routes = [
  {
    path: '/login',
    guard: GuestGuard,
    exact: true,
    layout: AuthLayout,
    component: lazy(() => import('views/auth/Login/Login'))
  },
  {
    path: '/profile/:username',
    exact: true,
    layout: DefaultLayout,
    component: lazy(() => import('views/profile/index'))
  },
  {
    path: '/register',
    exact: true,
    guard: GuestGuard,
    layout: AuthLayout,
    component: lazy(() => import('views/auth/SignUp/SignUp'))
  },
  {
    path: '/course/:id',
    exact: true,
    layout: DefaultLayout,
    component: lazy(() => import('views/detail/index'))
  },
  {
    path: '/admin',
    exact: true,
    component: lazy(() => import('views/admin/index'))
  },
  {
    path: '/learning/:id/',
    guard: AuthGuard,
    routes: [
      {
        exact: true,
        guard: AuthGuard,
        path: '/learning/:id/',
        component: lazy(() => import('views/studying/index'))
      },
      {
        exact: true,
        guard: AuthGuard,
        path: '/learning/html-css/exercise/1',
        component: lazy(() => import('views/excercises/index'))
      }
    ]
  },
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: lazy(() => import('views/home/index'))
  }
];
