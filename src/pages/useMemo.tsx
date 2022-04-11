import { useMemo } from 'react';
import styled from '@emotion/styled';
import UseMemo1 from '../components/UseMemo1';
import UseMemo2 from '../components/UseMemo2';

const UseMemo = () => {
  return (
    <>
      <Info>개발자도구 console 창을 확인하세요.</Info>
      <Title>경우1</Title>
      <Container>
        <Content>
          <SubTitle>useMemo 미사용</SubTitle>
          <UseMemo1 tryHook={false} />
        </Content>
        <Content>
          <SubTitle>useMemo 사용</SubTitle>
          <UseMemo1 tryHook={true} />
        </Content>
      </Container>
      <br />
      <Title>경우2</Title>
      <Container>
        <Content>
          <SubTitle>useMemo 미사용</SubTitle>
          <UseMemo2 tryHook={false} />
        </Content>
        <Content>
          <SubTitle>useMemo 사용</SubTitle>
          <UseMemo2 tryHook={true} />
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 800px;
  height: 450px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h2`
  width: 800px;
  margin: 10px auto 0;
`;
const SubTitle = styled.h3`
  text-align: center;
`;
const Content = styled.div`
  width: 380px;
  border: 1px solid #c2c2c2;
`;

const Info = styled.div`
  width: 800px;
  text-align: right;
  margin: auto;
  color: #a2a2a2;
`;
export default UseMemo;
