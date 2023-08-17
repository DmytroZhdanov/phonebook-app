import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin: 0 auto;
  width: 320px;
  padding: 8px 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const ContactLink = styled(NavLink)`
  display: block;
  font-size: 24px;
  padding: 8px;
  font-weight: 700;
  text-decoration: ${props => (props.current === 'true' ? 'underline' : 'none')};
`;
