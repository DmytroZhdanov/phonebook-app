import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { SharedOutlet } from './SharedOutlet/SharedOutlet';

export const App = () => {
  const Welcome = lazy(() => import('Pages/Welcome/Welcome'));
  const Contacts = lazy(() => import('Pages/Contacts/Contacts'));
  const Register = lazy(() => import('Pages/Register/Register'));
  const Login = lazy(() => import('Pages/Login/Login'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedOutlet />}>
        <Route index element={<Welcome />} />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo='/login' component={<Contacts />} />}
        />
        <Route
          path="register"
          element={<RestrictedRoute redirectTo='/contacts' component={<Register />} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo='/contacts' component={<Login />} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
