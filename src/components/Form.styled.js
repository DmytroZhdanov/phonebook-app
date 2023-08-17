import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 320px;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 768px;
  }
`;

export const Wrapper = styled.div`
  border-radius: 30px;
  background-color: #ffffff;
  padding: 40px 20px;
  margin: 30px auto 0;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Form = styled.form`
  position: relative;
  margin: 20px auto;
`;

export const Label = styled.label`
  position: static;
  height: 60px;
  display: block;
  font-size: 18px;
  color: #a4a4a4;
  transform: translateX(15px);
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1),
    color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    height 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus-within,
  &[data-filled='true'] {
    height: 95px;
    color: #000000;
    transform: translate(15px, -14px);
  }

  &:focus-within input,
  &[data-filled='true'] input {
    transform: translate(-15px, 10px);
  }
`;

export const Input = styled.input`
  transform: translate(-15px, -34px);
  margin-bottom: 10px;
  padding: 14px 15px;
  width: 250px;
  border-radius: 10px;
  border: 2px solid #efefef;
  background-color: transparent;
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 360px;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 14px 15px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  background: #146b9c;
  border: none;
`;

export const Text = styled(Link)`
  display: block;
  color: #a4a4a4;
  text-align: center;
  font-size: 14px;
`;
