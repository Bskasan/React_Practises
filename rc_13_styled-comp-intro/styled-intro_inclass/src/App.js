import { Button, ExtButton } from "./components/Button.styled";
import HeaderText from "./components/HeaderText";

function App() {
  return (
    <>
      <HeaderText color>Styled-Components</HeaderText>
      <Button>Send</Button>
      <Button primary>Send</Button>
      <ExtButton react>Study</ExtButton>
      <ExtButton>Study More!</ExtButton>
    </>
  );
}

export default App;
