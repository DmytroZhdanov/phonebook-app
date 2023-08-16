import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
// import { RiContactsBookFill } from 'react-icons/ri';

export const LogoContainer = styled(NavLink)`
  display: flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
`;

// export const LogoIcon = styled(RiContactsBookFill)`
//   width: 20px;
//   height: 20px;
// `;

export const LogoText = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
