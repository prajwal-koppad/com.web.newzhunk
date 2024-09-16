import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NewsCard from "./components/NewsCard/NewsCard";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <p className="headline">NewzHunk - Top Headlines - Technology</p>
          <Routes>
            <Route path="/" element={<NewsCard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
