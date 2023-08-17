import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Title1 } from 'Pages/Contacts/Contacts.styled';
import {
  Container,
  Wrapper,
  Form,
  Input,
  Label,
  Button,
  Text,
} from 'components/Form.styled';
import { Eye } from 'components/Eye/Eye';
import { useState } from 'react';

const Login = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  const handleBlur = e => {
    e.currentTarget.parentElement.setAttribute(
      'data-filled',
      `${e.currentTarget.value === '' ? 'false' : 'true'}`
    );
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setLogin(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title1>Log in</Title1>
        <Form onSubmit={handleSubmit}>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={login}
              required
            />
          </Label>
          <Label>
            Password
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              title="Password should contain minimum 7 symbols"
              onBlur={handleBlur}
              onChange={handleChange}
              value={password}
              required
            />
          </Label>
          <Eye show={showPassword} setShowPassword={setShowPassword} />
          <Button type="submit" >
            Log in
          </Button>
        </Form>
        <Text to="/register">or Sign Up</Text>
      </Wrapper>
    </Container>
  );
};

export default Login;
