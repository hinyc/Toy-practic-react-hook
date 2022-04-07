import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const NavBar = () => {
  const [select, setSelect] = useState(() => (window.localStorage.getItem('select') ? Number(window.localStorage.getItem('select')) : 0));
  const navigate = useNavigate();

  const menuArr = useMemo(() => ['/', 'useState', 'useMemo', 'useCallback'], []);

  const clickHandler = (el: string, idx: number) => {
    navigate(el);
    setSelect(idx);
    window.localStorage.setItem('select', String(idx));
  };
  return (
    <Container>
      {menuArr.map((el, idx) => (
        <Content key={idx}>
          <Button
            variant="contained"
            size="small"
            color={select === idx ? 'success' : 'primary'}
            key={idx}
            onClick={() => {
              clickHandler(el, idx);
            }}
          >
            {el === '/' ? 'HOME' : el}
          </Button>
        </Content>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const Content = styled.div`
  margin: 5px;
`;

export default NavBar;
