import {NavLink} from 'react-router-dom'
import { Modal } from 'components/Modal/Modal';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const Login = () => {
  const modalRoot = document.querySelector('#modal-root');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(logIn({
      email: form.elements.email.value,
      password: form.elements.password.value,
    }))

    form.reset();
  }

  return createPortal(
    <Modal>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder='Email'/>
        <input type="password" name="password" placeholder='Password'/>
        <button type="submit">Log in</button>
      </form>
      <NavLink to='/register'>or Sign Up</NavLink>
    </Modal>,
    modalRoot
  );
};

export default Login;
