import styled from 'styled-components';
import UseCallbackTest from '../components/UseCallbackTest';

const UseCallback = () => {
  return (
    <Container>
      <Content>
        <SubTitle>useCallback 사용</SubTitle>
        <UseCallbackTest tryHook={true} />
      </Content>
      <Content>
        <SubTitle>useCallback 미사용</SubTitle>
        <UseCallbackTest tryHook={false} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  height: 450px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const SubTitle = styled.h3`
  text-align: center;
`;
const Content = styled.div`
  width: 380px;
  border: 1px solid #c2c2c2;
`;

export default UseCallback;
