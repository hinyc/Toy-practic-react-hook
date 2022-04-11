import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Button } from '@mui/material';

export default function Home() {
  const navigate = useNavigate();

  const hookArr = [
    {
      path: '/useState',
      title: 'useState 이렇게 사용해 보았나?',
      code: ['const [state, setState] = useState(( ) => initialValue);', ' setState((prevState) => prevState + 1)'],
    },
    {
      path: '/useMemo',
      title: 'useMemo를 이용한 불필요한 함수실행 및 참조데이터 주소 재생성 최적화',
      code: ['const memoizationState = useMemo(()=>; 복잡한함수실행결과 )', 'const memoizationState = useMemo(()=>; 참조데이터)'],
    },
    {
      path: '/useCallback',
      title: 'useCallback? 렌더시마다 함수 참조 주소가 새롭게 생성되는것을 방지 하자!',
      code: ['const memoizationFunction = useCallback(( ) =>; function())'],
    },
  ];
  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column' }} spacing={3}>
      {hookArr.map((el, idx) => (
        <Grid key={idx} item onClick={() => navigate(el.path)}>
          <Button
            variant="outlined" //
            fullWidth
            sx={{
              display: 'flex', //
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <SubTitle>{el.title}</SubTitle>
            {el.code.map((el, idx) => (
              <Code key={idx}>{el}</Code>
            ))}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

const SubTitle = styled.h3``;
const Content = styled.div`
  padding: 10px;
  width: 800px;
  border: 1px solid #c2c2c2;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    opacity: 0.45;
  }
`;
const Code = styled.code`
  text-align: left;
  color: #a2a2a2;
`;
