import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Home from "./Components/Home"
import MoviesList from "./Components/MoviesList";
import Movie from "./Components/Movie";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="movie/:id" element={<><Movie/></>}/>
          <Route path="movie/:type" element={<MoviesList/>}/>
          <Route path="/*" element={<h1>Error Page</h1>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
