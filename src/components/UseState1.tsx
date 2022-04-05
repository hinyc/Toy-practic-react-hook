import React, { useState } from 'react';
import styled from 'styled-components';

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
      <Button onClick={() => setCount(count + 1)}>Count+</Button>
      <code>setCount(count+1)</code>
      <br />
      <Button onClick={dualCal}>Count *2 +1 </Button>
      {setStateCallback ? (
        <code>
          setCount((pre) =&gt; pre * 2) <br />
          setCount((pre) =&gt; pre + 1)
        </code>
      ) : (
        <code>
          setCount(count * 2) <br />
          setCount(count + 1)
        </code>
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
`;

const Button = styled.button`
  margin: 5px;
  font-size: 1.4rem;
  :hover {
    cursor: pointer;
  }
`;
