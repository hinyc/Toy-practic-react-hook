import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';

const UseMemo1 = (props: { tryHook: boolean }) => {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(false);
  const [countMemo, setCountMemo] = useState(0);
  const [renderMemo, setRenderMemo] = useState(false);
  const { tryHook } = props;

  const computeExpensiveValue = useCallback(
    (count: number) => {
      for (let i = 0; i < 999999999; i++) {}
      if (!tryHook) console.log('useMemo 미사용 복잡한 함수 실행😭');
      if (tryHook) console.log('useMemo 사용 복잡한 함수 실행😜');
      return count;
    },
    [tryHook]
  );

  const usingMemo = useMemo(() => computeExpensiveValue(countMemo), [computeExpensiveValue, countMemo]);
  const notUsingMemo = tryHook ? null : computeExpensiveValue(count);
  const currentCount = tryHook ? usingMemo : notUsingMemo;

  const countUp = () => {
    if (tryHook) {
      setCountMemo(countMemo + 1);
    } else {
      setCount(count + 1);
    }
  };

  const renderHandler = () => {
    if (tryHook) {
      setRenderMemo((p) => !p);
    } else {
      setRender((p) => !p);
    }
  };

  return (
    <Container>
      <P>Current Count : {currentCount}</P>
      <Render render={tryHook ? renderMemo : render}>Render!</Render>
      <div>
        <Button onClick={countUp}>Count Up</Button>
        <Button onClick={renderHandler}>Render Button</Button>
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
  margin: auto;
`;
const P = styled.p`
  font-size: 1.2rem;
`;

interface renderType {
  render: boolean;
}
const Render = styled.p<renderType>`
  width: 200px;
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
  height: 50px;
  line-height: 50px;
  background-color: #e3a3e3;
`;
const Button = styled.button`
  margin: 5px;
  font-size: 1.4rem;
  :hover {
    cursor: pointer;
  }
`;

export default UseMemo1;
