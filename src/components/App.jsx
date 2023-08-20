import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { SharedOutlet } from './SharedOutlet/SharedOutlet';
import { useLazyRefreshQuery } from 'redux/auth/api';
import { setCredentials } from 'redux/auth/authSlice';
import { selectToken } from 'redux/auth/selectors';

export const App = () => {
  const Welcome = lazy(() => import('Pages/Welcome/Welcome'));
  const Contacts = lazy(() => import('Pages/Contacts/Contacts'));
  const Register = lazy(() => import('Pages/Register/Register'));
  const Login = lazy(() => import('Pages/Login/Login'));

  const dispatch = useDispatch();
  const [refresh, { isFetching }] = useLazyRefreshQuery();
  const token = useSelector(selectToken);

  useEffect(() => {
    const refetch = async () => {
      if (token) {
        try {
          const user = await refresh().unwrap();
          dispatch(setCredentials({ user, token }));
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    refetch();
  }, [dispatch, token, refresh]);

  return (
    <Routes>
      <Route path="/" element={<SharedOutlet />}>
        <Route index element={<Welcome />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute
              isLoading={isFetching}
              redirectTo="/login"
              component={<Contacts />}
            />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
