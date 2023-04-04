import { Box, Button, Typography } from "@mui/material"; //* Bu import sekli Performans acisindan problemli
import Container from "@mui/material/Container"; //!it's better for performance
//import {Container} from "@mui/material"

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          mt={3}
          color="primary"
        >
          MUI Typo
        </Typography>

        <Typography
          variant="body1"
          align="justify"
          p={5}
          mt={4}
          sx={{ backgroundColor: "lightblue", fontSize: "1.5rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          magnam dolore id quo provident aut ex! Delectus adipisci consequuntur,
          minus architecto dignissimos iure ipsam culpa minima reprehenderit a
          deserunt cum?
        </Typography>

        <Typography
          //? Variant -> ForStyling
          variant="button"
          align="center"
          sx={{ display: "inline-block", marginTop: "1.1rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          consectetur?
        </Typography>
      </Container>
      <Container>
        <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button variant="text" color="warning">Text</Button>
          <Button variant="contained" color="error">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
