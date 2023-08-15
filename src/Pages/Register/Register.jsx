import { NavLink } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const Register = () => {
  const modalRoot = document.querySelector('#modal-root');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return createPortal(
    <Modal>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign up</button>
      </form>
      <NavLink to="/login">or Log In</NavLink>
    </Modal>,
    modalRoot
  );
};

export default Register;
