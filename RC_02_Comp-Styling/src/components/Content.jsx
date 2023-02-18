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

import footballKid from "../images/football-kid.jpg";

const Content = () => {
  //! Local Style Objects
  const pStyle = {
    fontFamily: "Thoma",
    fontSize: "1.3rem",
    lineHeight: "1.5",
  };

  return (
    <div>
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
        src="https://cdn.pixabay.com/photo/2016/11/14/05/21/children-1822688_960_720.jpg"
        alt="kids-football"
      />
      <img src={footballKid} alt="football-img" />
    </div>
  );
};

export default Content;
