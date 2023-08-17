import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Greeting = styled.p`
  width: 180px;
  margin: auto 0;
  text-wrap: wrap;
  text-align: center;
`;

export const LogOutLink = styled(NavLink)`
  padding: 10px 0;
`;

export const LogOutSvg = styled(RiLogoutBoxRLine)`
  margin: auto 0;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;
