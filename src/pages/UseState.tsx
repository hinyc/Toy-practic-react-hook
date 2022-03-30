import React from 'react';
import styled from 'styled-components';

const UseState = () => {
  return (
    <>
      <Container>
        <SubTitle> useState(data) </SubTitle>
        <SubTitle> useState(( ) {`=>`} data) </SubTitle>
      </Container>
      <Container>
        <SubTitle> setUseState(data) </SubTitle>
        <SubTitle> setUseSate((preState) {`=>`} [newData, ...PrevState]) </SubTitle>
      </Container>
    </>
  );
};

export default UseState;

const Container = styled.div`
  width: 800px;
  height: 450px;
  margin: auto;
  display: flex;
  justify-content: space-between;
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
