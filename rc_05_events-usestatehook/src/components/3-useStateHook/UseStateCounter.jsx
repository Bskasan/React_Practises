//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* =============================================================

import { useState } from "react";

const UseStateCounter = () => {
  //? You can think of like this is a global variable.
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  //! Alternatives
  //   const decrement = () => {
  //     if (count > 0) {
  //       setCount(count - 1)
  //     } else {
  //       console.log("Counter can not be negative number")
  //     }
  //   }

  return (
    <div className="container text-center mt-4">
      <h2 className="text-danger">Use State Counter</h2>
      <h1 className="display-4">Count: {count}</h1>
      <button onClick={increment} className="btn btn-success">
        INC
      </button>
      <button onClick={() => setCount(0)} className="btn btn-danger">
        CLR
      </button>
      <button onClick={() => setCount(count - 1)} className="btn btn-warning">
        DEC
      </button>

      {/* Alternatives */}
      {/* <button onClick={decrement} className="btn btn-warning">
        DEC
      </button> */}

      {/* <button
        onClick={() =>
          count > 0 ? setCount(count - 1) : alert("Should be bigger than 0")
        }
        className="btn btn-warning"
      >
        DEC
      </button> */}
    </div>
  );
};

export default UseStateCounter;
