import { Button, ExtButton } from "./components/Button.styled";
import HeaderText from "./components/HeaderText";
import Links from "./components/Links";
import Sarmal from "./components/Sarmal";

function App() {
  return (
    <>
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

      <Sarmal>
        <Links href="https://github.com/Bskasan" target="_blank">
          --- Bekir's Personal Website ---
        </Links>
        <Links small href="https://www.linkedin.com/in/bekirskasan/" target="_blank">
          --- Bekir's LinkedIn ---
        </Links>
      </Sarmal>
    </>
  );
}

export default App;
