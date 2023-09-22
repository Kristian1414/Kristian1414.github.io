import MainPage from "./components/MainPage";
import Coba from "./components/Coba";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/coba" element={<Coba />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
