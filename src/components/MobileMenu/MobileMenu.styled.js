import styled from '@emotion/styled';

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Container = styled.div`
  height: 100%;
  width: 75%;
  background-color: #c6dee3;
  padding: 8px 15px;

  margin-left: auto;
  /* margin-left: 100vw; */
  /* transition: margin-left 250ms cubic-bezier(0.4, 0, 0.2, 1); */

  border-radius: 24px 0 0 24px;
`;

export const CloseButton = styled.button`
  display: block;
  border: none;
  padding: 0;
  margin-left: auto;
  background-color: transparent;
  width: 32px;
  height: 32px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  margin-top: 72px;
  font-size: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;
