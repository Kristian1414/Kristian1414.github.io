import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/Personal-Website.github.io"
            element={<MainPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
