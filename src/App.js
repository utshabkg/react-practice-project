import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Movie from "./components/movie/Movie";
import Counter from "./components/counter/Counter";
import Demo from "./components/useEffectDemo/Demo";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Insta from "./components/contact/Insta";
import Mail from "./components/contact/Mail";
import Error from "./components/error/Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/employees" element={<Demo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route index element={<Insta />} />
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
