import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 8px;
  &:not(:last-of-type) {
    border-bottom: 1px solid #efefef;
  }
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const DeleteButton = styled.button`
  height: 24px;
  margin-left: auto;
  background-color: transparent;
  padding: 0;
  border: none;
`;
