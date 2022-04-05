import React from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Content>
        <SubTitle>useState</SubTitle>
      </Content>
      <Content>
        <SubTitle>useMemo</SubTitle>
      </Content>
      <Content>
        <SubTitle>useCallback</SubTitle>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 800px;
  height: 450px;
  margin: auto;
`;
const SubTitle = styled.h3``;
const Content = styled.div`
  width: 800px;
  border: 1px solid #c2c2c2;
`;
const Info = styled.div`
  width: 800px;
  text-align: right;
  margin: auto;
  color: #a2a2a2;
`;
