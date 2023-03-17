import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Instructors />
      <Contact />
      <NotFound />
      <Footer />
    </>
  );
}

export default App;
