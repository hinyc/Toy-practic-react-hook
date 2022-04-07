import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Content onClick={() => navigate('/useState')}>
        <SubTitle>useState 이렇게 사용해 보았나?</SubTitle>
        <Code>
          const [state, setState] = useState(( ) =&gt; initialValue) <br />
          setState((prevState) =&gt; prevState + 1)
        </Code>
      </Content>
      <Content onClick={() => navigate('/useMemo')}>
        <SubTitle>useMemo를 이용한 불필요한 함수실행 및 참조데이터 주소 재생성 최적화</SubTitle>
        <Code>
          const memoizationState = useMemo(()=&gt; 복잡한함수실행결과 )<br />
          const memoizationState = useMemo(()=&gt; 참조데이터)
        </Code>
      </Content>
      <Content onClick={() => navigate('/useCallback')}>
        <SubTitle>useCallback? 렌더시마다 함수 참조 주소가 새롭게 생성되는것을 방지 하자!</SubTitle>
        <Code>const memoizationFunction = useCallback(( ) =&gt; function()) </Code>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 800px;
  height: 450px;
  margin: auto;
`;
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
  width: 800px;
  text-align: left;

  color: #a2a2a2;
`;
