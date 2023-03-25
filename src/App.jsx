import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./Styles/Header.scss";
import "./Styles/Footer.scss";
import "./Styles/Home.scss";
import "./Styles/App.scss";
import "./Styles/Download.scss";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Download from "./Components/Download";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Download" element={<Download />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
