import Header from "./components/Header";
import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";
import Nav from "./components/styled/Nav";

const styles = {
  colors: {
    primary: "#eee",
    secondary: "#8A1C4A",
  },
  margins: {},

  paddings: {},
  breakpoints: { xs: "300px", sm: "500px", md: "700px" },
};

const App = () => {
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <Nav />
      <Container>
        <Header />
        {data.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
