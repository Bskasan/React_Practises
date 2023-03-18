import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import People from "./pages/People";
import Paths from "./pages/Paths";
import { Routes, Route } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        {/* Dynamic Link and  Route*/}
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/paths" element={<Paths />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
