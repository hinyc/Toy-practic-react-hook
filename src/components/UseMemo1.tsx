import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

const UseMemo1 = () => {
  const [count, setCount] = useState(0);
  const [capture, setCapture] = useState(0);

  const computeExpensiveValue = useCallback((count: number) => {
    for (let i = 0; i < 999999999; i++) {}
    console.log('복잡한계산');
    setCount(99);
    return count;
  }, []);

  const currentCount = useMemo(() => computeExpensiveValue(count), [computeExpensiveValue, count]);

  const countUp = () => {
    setCount(count + 1);
  };

  const captureCount = () => {
    setCapture(count);
  };

  return (
    <Container>
      <P>Current Count : {currentCount}</P>
      <P>Capture Count : {capture}</P>
      <div>
        <Button onClick={countUp}>count Up</Button>
        <Button onClick={captureCount}>capture count</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const P = styled.p`
  font-size: 1.2rem;
`;
const Button = styled.button`
  margin: 5px;
  font-size: 1.4rem;
  :hover {
    cursor: pointer;
  }
`;

export default UseMemo1;
