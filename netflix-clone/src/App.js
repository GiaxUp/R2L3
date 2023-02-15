import "./App.css";
import MyNavbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Wrapper from "./components/Wrapper.jsx";
import MyFooter from "./components/Footer.jsx";
import TVShows from "./components/TVShows.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Header />
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details/:imdbID" element={<MovieDetails />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
