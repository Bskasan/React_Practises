import Header from "./components/Header";
import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";
import { ThemeProvider } from "styled-components";

const styles = {
  colors: {
    primary: "#444",
    secondary: "#666",
  },
  margins: {},

  paddings: {},
  breakpoints: { xs: "300px", sm: "500px", md: "700px" },
};

function App() {
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
