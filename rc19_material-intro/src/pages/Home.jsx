import AppBarComp from "../components/AppBarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { pink, deepOrange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#bede",
      },
      secondary: {
        main: pink[300],
      },
      error: {
        main: deepOrange[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <TypoButtons />
      <TextFieldComp /> */}
      <AppBarComp />
      <CardGrid />
    </ThemeProvider>
  );
};

export default Home;
