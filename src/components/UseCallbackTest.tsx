import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

interface propsType {
  tryHook: boolean;
}
const UseCallbackTest = (props: propsType) => {
  const [currentTime, setCurrentTime] = useState('');
  const { tryHook } = props;

  const showCurrentTime = () => {
    const currentTime = new Date().toTimeString();
    setCurrentTime(currentTime);
  };

  const showCurrentTimeCallback = useCallback(() => {
    const currentTime = new Date().toDateString();
    setCurrentTime(currentTime);
  }, []);

  const dependency = tryHook ? showCurrentTimeCallback : showCurrentTime;

  useEffect(() => {
    console.log('useEffect 실행');
  }, [dependency]);

  return (
    <Container>
      <p>
        <span>Time :</span> {currentTime}
      </p>
      <button onClick={showCurrentTime}>ClickCurrentTime</button>
      <h3>code 비교</h3>
      <pre>
        {tryHook ? (
          <code>{`const showCurrentTimeCallback = 
  useCallback(() => {
    const currentTime = 
      new Date().toDateString();
    setCurrentTime(currentTime);
}, [])`}</code>
        ) : (
          <code>{`const showCurrentTime = () => {
  const currentTime = 
    new Date().toTimeString();
  setCurrentTime(currentTime);
}`}</code>
        )}
      </pre>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1.2rem;
    width: 340px;
    height: 30px;
    span {
      font-weight: 700;
    }
  }
  button {
    width: 200px;
    height: 40px;
    font-size: 1.4rem;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #c2f2e2;
    margin-bottom: 25px;
    :hover {
      cursor: pointer;
      opacity: 0.65;
    }
    :active {
      opacity: 0.95;
    }
  }
  pre {
    width: 280px;
    height: 100px;
    padding: 15px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
`;

export default UseCallbackTest;
