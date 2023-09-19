import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Workflows from "./pages/Workflows";
import MetricsSetup from "./pages/MetricsSetup";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import isAuthenticated from "./scripts/Tokens";
import Graphs from "./pages/dataVisualization/Graphs";
import TestIndicators from "./pages/dataVisualization/indicators/IndicatorsMain";
import TestMetrics from "./pages/dataVisualization/metrics/MetricsMain";
import TestUsers from "./pages/usersManagment/UsersMain";

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
                <Route path="metrics-setup" element={<MetricsSetup />} />
                <Route path="projects" element={<Projects />} />
              </>
            )}
            <Route path="register" element={<Register />} />
            <Route path="graphs" element={<Graphs />} />
            <Route path="indicators" element={<TestIndicators />} />
            <Route path="metrics" element={<TestMetrics />} />
            <Route path="users" element={<TestUsers />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
