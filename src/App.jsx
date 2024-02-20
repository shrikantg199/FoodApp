import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Mainpages/Home";
import Error from "./Mainpages/Error";
import Success from "./Mainpages/Success";
import Contact from "./Mainpages/Contact";
import About from "./Mainpages/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/*" element={<Error />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
