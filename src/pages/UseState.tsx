import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import UseState1 from '../components/UseState1';
const UseState = () => {
  return (
    <>
      <Info>개발자도구 console 창을 확인하세요.</Info>
      <Division>
        <DivTitle> useState(data) </DivTitle>
        <DivTitle> useState(( ) {`=>`} data) </DivTitle>
      </Division>
      <Container>
        <Content>
          <UseState1 stateCallback={false} setStateCallback={false} />
        </Content>
        <Content>
          <UseState1 stateCallback={true} setStateCallback={true} />
        </Content>
      </Container>
    </>
  );
};

export default UseState;

const Container = styled.div`
  width: 800px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const Division = styled.div`
  width: 800px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const DivTitle = styled.h2`
  width: 380px;
  text-align: center;
`;

interface SubTitleType {
  small?: boolean;
}
const SubTitle = styled.h3<SubTitleType>`
  /* text-align: center; */
  padding-left: 5px;
  ${({ small }) => {
    console.log(small);
    if (small) {
      return css`
        font-size: 1rem;
      `;
    }
  }}
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
