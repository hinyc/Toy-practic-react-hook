import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Container>
      <Content>useMemo</Content>
      <Content>useCallback</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 130px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background-color: #a2b2f2;
  color: #fff;
  font-size: 20px;
  border-radius: 7px;
  margin: 5px;
  transition: 0.3s;
  :hover {
    opacity: 0.65;
    cursor: pointer;
  }
  :active {
    opacity: 0.95;
  }
`;

export default NavBar;
