import { Button, ExtButton } from "./components/Button.styled";

function App() {
  return (
    <>
      <h1>Styled-Components</h1>
      <Button>Send</Button>
      <Button primary>Send</Button>
      <ExtButton react>Study</ExtButton>
      <ExtButton>Study More!</ExtButton>
    </>
  );
}

export default App;
