import styled from 'styled-components';

const UseCallback = () => {
  return (
    <Container>
      <Content>useCallback 미사용</Content>
      <Content>useCallback 사용</Content>
    </Container>
  );
};

const Container = styled.div`
  width: 700px;
  height: 300px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 340px;
  border: 1px solid #c2c2c2;
`;

export default UseCallback;
