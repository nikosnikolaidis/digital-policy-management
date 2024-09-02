import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Workflows from "./pages/Workflows";
import KPIsSetup from "./pages/KPIsSetup";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import isAuthenticated from "./scripts/Tokens";
import MetricsMain from "./pages/dataVisualization/indicators/MetricsMain";
import KPIsMain from "./pages/dataVisualization/metrics/KPIsMain";


function App() {
  const [valid, setvalid] = useState();

  useEffect(() => {
    var isvalid = isAuthenticated();
    setvalid(isvalid);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {valid && (
              <>
                <Route path="workflows" element={<Workflows />} />
                <Route path="kpis-setup" element={<KPIsSetup />} />
                <Route path="metrics" element={<MetricsMain />} />
                <Route path="kpis" element={<KPIsMain />} />
              </>
            )}
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
