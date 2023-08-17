import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Button,
  Container,
  Form,
  Input,
  Label,
  Text,
  Wrapper,
} from 'components/Form.styled';
import { Title1 } from 'Pages/Contacts/Contacts.styled';
import { useState } from 'react';
import { Eye } from 'components/Eye/Eye';

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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

  const handleBlur = e => {
    e.currentTarget.parentElement.setAttribute(
      'data-filled',
      `${e.currentTarget.value === '' ? 'false' : 'true'}`
    );
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
        <Title1>Sign Up</Title1>
        <Form onSubmit={handleSubmit}>
          <Label>
            Your Name
            <Input
              type="text"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={name}
              required
            />
          </Label>
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
              onBlur={handleBlur}
              onChange={handleChange}
              value={password}
              required
            />
          </Label>
          <Eye show={showPassword} setShowPassword={setShowPassword} />
          <Button type="submit" >
            Sign up
          </Button>
        </Form>
        <Text to="/login">or Log In</Text>
      </Wrapper>
    </Container>
  );
};

export default Register;
