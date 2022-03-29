import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const UseMemo2 = (props: { tryHook: boolean }) => {
  const [random, setRandom] = useState(0);
  const [count, setCount] = useState(0);
  const { tryHook } = props;
  const fruits = useMemo(() => ['apple', 'banana', 'melon', 'peach', 'mango'], []);

  const fruitMemo = useMemo(
    () => ({
      fruit: fruits[random],
    }),
    [fruits, random]
  );
  const fruit = {
    fruit: fruits[random],
  };

  const shuffleHandler = () => {
    setRandom(Math.floor(Math.random() * 5));
  };

  const countUp = () => {
    setCount(count + 1);
  };

  const dependency = tryHook ? fruitMemo : fruit;
  useEffect(() => {
    console.log(`useEffect 실행`);
  }, [dependency]);

  return (
    <Container>
      <P>Current Fruit : {fruit.fruit}</P>
      <P>Count : {count}</P>
      <div>
        <Button onClick={shuffleHandler}>shuffle!</Button>
        <Button onClick={countUp}>countUp!</Button>
      </div>
    </Container>
  );
};

export default UseMemo2;

const Container = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
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
