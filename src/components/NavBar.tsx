import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, Container, Grid } from '@mui/material';

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
    <Container fixed>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', mt: 1, mb: 3 }}>
        {menuArr.map((el, idx) => (
          <Grid item key={idx}>
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NavBar;
