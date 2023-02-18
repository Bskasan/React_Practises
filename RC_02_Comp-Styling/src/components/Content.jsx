//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
// ? ancak public klasöründeki resimler import suz bir şekilde
//? erişilebilir.

import football from "../images/football.jpg";
//? External Styling with css document
import "../Content.css";

const Content = () => {
  //! Local Style Objects
  const pStyle = {
    fontFamily: "Thoma",
    fontSize: "1.3rem",
    lineHeight: "1.5",
  };

  const imgStyle = {
    display: "block",
    margin: "1rem auto",
    width: "400px",
  };

  return (
    <div className="content-div">
      {/* JSX */}
      {/* Inline Styling */}
      <h2 style={{ color: "white", backgroundColor: "red" }}>React JS</h2>
      {/* Local or Global Variables */}
      <p style={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum,
        optio delectus enim minus et harum dolorum iure maiores nam dolorem
        incidunt quis doloribus in, dolores fugiat provident, veritatis rerum.
      </p>

      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2016/11/14/05/21/children-1822688_960_720.jpg"
        alt="kids-football"
      />
      <img style={imgStyle} src={football} alt="football-img" />

      <p className="par">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
        obcaecati iste unde repudiandae magnam beatae quo omnis. Explicabo,
        tempora. Alias perspiciatis dolorum assumenda impedit, voluptate itaque
        id nobis cupiditate sequi.
      </p>

      <p className="par">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
        necessitatibus sunt voluptas dolorum nulla amet minima fugiat
        consequatur voluptate ea itaque impedit harum mollitia, aliquam id atque
        asperiores exercitationem soluta?
      </p>
    </div>
  );
};

export default Content;
