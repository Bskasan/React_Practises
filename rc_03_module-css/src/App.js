//! 3rd Party Libraries
//! - Bootstrap, React-Bootstrap
//! - Tailwindd
//! - SCSS / SASS
//! - Styled Components / Emotion / Compiled Styled
//! - AntDesign
//! - Material UI ( Google )
//! - Semantic UI

import Card from "./components/card/Card";
import data from "./utils/data";

//? Module CSS
//? Derleyici tabanli ( React - webpack ( Babel ))

function App() {
  return (
    <div>
      {data.map(({ id, language, img, btnName }) => (
        <Card key={id} lang={language} img={img} btn={btnName} />
      ))}
    </div>
  );
}

export default App;
