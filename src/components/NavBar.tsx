import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavBar = () => {
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const menuArr = useMemo(() => ['/', 'useMemo', 'useCallback'], []);

  const clickHandler = (el: string, idx: number) => {
    navigate(el);
    setSelect(idx);
  };
  return (
    <Container>
      {menuArr.map((el, idx) => (
        <Content
          key={idx}
          onClick={() => {
            clickHandler(el, idx);
          }}
          select={select}
          idx={idx}
        >
          {el === '/' ? 'HOME' : el}
        </Content>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

interface ContentType {
  select: number;
  idx: number;
}
const Content = styled.div<ContentType>`
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
  ${({ select, idx }) => {
    if (select === idx) {
      return css`
        background-color: #c3e3c3;
      `;
    }
  }}
`;

export default NavBar;
