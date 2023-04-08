import { useState } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";
import { useRef } from "react";
import UseRefComp from "./components/UseRefComp";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Bekir");
  const [taxDataState, setTaxDataState] = useState({ taxRate: 0.18, ship: 25 });

  const taxData = { taxRate: 0.18, ship: 25 }; //ilk oluşumda referansını tanımlıyor ve o referans sabit kalıyor

  const taxData1 = useRef({ taxRate: 0.18, ship: 25 });
  console.log(taxData1); //hafızada referansı sabit ama kendisi değişebilir olan verileri tanımlamak istiyorsak

  return (
    <div className="container mt-2">
      <div>
        <Header />
      </div>
      <hr />
      <div className="">
        <p className="text-center">Count : {count}</p>
        <button
          className="btn btn-danger d-flex mx-auto"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-success d-flex mx-auto mt-3"
          onClick={() => setUser("Bekir Kasan")}
        >
          Change User
        </button>
      </div>
      <hr />
      {/* <HeaderMemo user={user} /> */}
      <HeaderMemo count={count} />
      <hr />
      {/* <TaxComp taxData={taxData} /> */}
      {/* <TaxComp taxData={taxDataState} /> */}
      <TaxComp taxData={taxData1} />
      <hr />
      <UseRefComp />
    </div>
  );
}

export default App;
