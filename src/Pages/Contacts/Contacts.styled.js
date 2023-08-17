import styled from '@emotion/styled';

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 30px;
  }
`;

export const Title1 = styled.h1`
  font-size: 28px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 33px;
  text-align: center;
`;

export const Title2 = styled.h2`
  font-size: 28px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 33px;
  text-align: center;
`;

export const Wrapper = styled.div`
  border-radius: 30px;
  background-color: #FFFFFF;
  padding: 40px 20px 20px;
  margin: 30px auto 0;

  @media screen and (min-width: 768px){
    width: 400px;
  }
`;

export const Message = styled.p`
  color: #a4a4a4;
  text-align: center;
  font-size: 14px;
`;
