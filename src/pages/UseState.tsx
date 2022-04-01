import React, { useState } from 'react';
import styled from 'styled-components';

const UseState = () => {
  return (
    <>
      <Container>
        <Content>
          <SubTitle> useState(data) </SubTitle>
        </Content>
        <Content>
          <SubTitle> useState(( ) {`=>`} data) </SubTitle>
        </Content>
      </Container>
      <br />
      <Container>
        <Content>
          <SubTitle> setUseState(newData) </SubTitle>
        </Content>
        <Content>
          <SubTitle>
            {' '}
            setUseSate((preState) {`=>`} [{<br />} &nbsp; &nbsp; newData, ...PrevState{<br />}]){' '}
          </SubTitle>
        </Content>
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
  /* text-align: center; */
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
