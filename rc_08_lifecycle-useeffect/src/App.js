//import LifeCycleMethods from "./components/LifeCycleMethods";
import { useState } from "react";
import UseEffectHook from "./components/UseEffectHook";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container text-center mt-4">
      <button className="btn btn-success" onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide" : "Show"}
      </button>
      {/* {toggle ? <LifeCycleMethods /> : null} */}
      {toggle ? <UseEffectHook /> : null}
    </div>
  );
}

export default App;
