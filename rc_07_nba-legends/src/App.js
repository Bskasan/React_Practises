import { Container } from "react-bootstrap";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <CardContainer />
    </Container>
  );
}

export default App;
