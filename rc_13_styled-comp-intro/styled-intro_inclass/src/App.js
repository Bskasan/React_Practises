import { Button, ExtButton } from "./components/Button.styled";
import HeaderText from "./components/HeaderText";
import Sarmal from "./components/Sarmal";

function App() {
  return (
    <Sarmal bg="#dee">
      <HeaderText color="hotpink">Styled-Components</HeaderText>
      <HeaderText color="#734586" bgColor="#eee">
        Styled-Components
      </HeaderText>
      <Button>Send</Button>
      <Button primary>Send</Button>
      <ExtButton react>Study</ExtButton>
      <ExtButton>Study More!</ExtButton>
    </Sarmal>
  );
}

export default App;
