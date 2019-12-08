import FirstPage from "./components/paginaInicio/FirstPage.jsx";
import PagLogin from "./components/paginaLogin/PagLogin.jsx";
import PagCliente from "./components/pagcliente/pagCliente.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Login" element={<PagLogin />} />
        <Route path="/Cliente" element={<PagCliente />} />
      </Routes>
    </Router>
  );
}

export default App;
