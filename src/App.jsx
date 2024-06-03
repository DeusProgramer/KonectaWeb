import FirstPage from "./components/paginaInicio/FirstPage.jsx";
import PagLogin from "./components/paginaLogin/PagLogin.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<FirstPage />} />
        <Route path="/PagLogin" element={<PagLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
