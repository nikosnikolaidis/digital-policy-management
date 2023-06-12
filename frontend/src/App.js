import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Workflows from "./pages/Workflows";
import MetricsSetup from './pages/MetricsSetup';
import Projects from './pages/Projects';
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="workflows" element={<Workflows />} />
            <Route path="metrics-setup" element={<MetricsSetup />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
