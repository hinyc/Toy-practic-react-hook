import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Paper } from '@mui/material';
export default function UseState1(props: { stateCallback: boolean; setStateCallback: boolean }) {
  const { stateCallback, setStateCallback } = props;
  const [count, setCount] = useState(stateCallback ? () => initialData() : initialData());

  function initialData(): number {
    // console.log('초기값 반환 함수 실행');
    return 0;
  }

  const dualCal = () => {
    if (setStateCallback) {
      setCount((pre) => {
        console.log(pre);
        return pre * 2;
      });
      setCount((pre) => {
        console.log(pre);
        return pre + 1;
      });
    } else {
      console.log(count);
      setCount(count * 2);
      console.log(count);
      setCount(count + 1);
    }
  };

  console.log('a');
  return (
    <Container>
      <P>count : {count}</P>
      <Button variant="contained" size="small" color="error" onClick={() => setCount(count + 1)}>
        Count+
      </Button>
      <Paper
        elevation={3}
        sx={{
          minWidth: 200,
          minHeight: 30,
          textAlign: 'center',
          lineHeight: 3,
          margin: '10px',
        }}
      >
        setCount(count+1)
      </Paper>
      <br />
      <Button variant="contained" size="small" color="error" onClick={dualCal}>
        Count *2 +1{' '}
      </Button>
      {setStateCallback ? (
        <Paper
          elevation={3}
          sx={{
            minWidth: 200,
            minHeight: 30,
            textAlign: 'center',
            lineHeight: 2,
            margin: '10px',
          }}
        >
          setCount((pre) =&gt; pre * 2) <br />
          setCount((pre) =&gt; pre + 1)
        </Paper>
      ) : (
        <Paper
          elevation={3}
          sx={{
            minWidth: 200,
            minHeight: 30,
            textAlign: 'center',
            lineHeight: 2,
            margin: '10px',
          }}
        >
          setCount(count * 2) <br />
          setCount(count + 1)
        </Paper>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const P = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Code = styled.code`
  margin: 5px 0;
`;
