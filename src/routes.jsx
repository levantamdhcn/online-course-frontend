import DefaultLayout from './layouts/DefaultLayout';
import { Fragment, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { lazy } from 'react';
import LoadingScreen from 'components/LoadingScreen';
import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import GuestGuard from 'components/GuestGuard';
import AuthGuard from 'components/AuthGuard';
import AdminLayout from 'layouts/AdminLayout';

export const renderRoutes = (routes = []) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes?.map((route, i) => {
          if(route.redirect) {
            return <Redirect to={route.redirect}/>
          }
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
    path: '/profile/:id',
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
    path: '/courses',
    exact: true,
    layout: DefaultLayout,
    component: lazy(() => import('views/courses/index'))
  },
  {
    path: '/course/:id',
    exact: true,
    layout: DefaultLayout,
    component: lazy(() => import('views/detail/index'))
  },
  {
    path: '/admin',
    guard: AuthGuard,
    layout: AdminLayout,
    routes: [
      {
        exact: true,
        path: '/admin',
        component: lazy(() => import('views/admin')),
      },
      {
        exact: true,
        path: '/admin/exercise',
        component: lazy(() => import('views/admin/Exercise/List')),
      },
      {
        exact: true,
        path: '/admin/exercise/add',
        component: lazy(() => import('views/admin/Exercise/AddPage')),
      },
      {
        exact: true,
        path: '/admin/exercise/:id',
        component: lazy(() => import('views/admin/Exercise/EditPage')),
      },
      {
        exact: true,
        path: '/admin/user',
        component: lazy(() => import('views/admin/User')),
      },
      {
        exact: true,
        path: '/admin/course',
        component: lazy(() => import('views/admin/Course')),
      },
      {
        exact: true,
        path: '/admin/lecture',
        component: lazy(() => import('views/admin/Lecture')),
      },
    ],
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
        path: '/learning/:subjectId/exercise/:exerciseId',
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
