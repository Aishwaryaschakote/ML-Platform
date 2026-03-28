/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { ProjectPage } from "./pages/ProjectPage.tsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectName" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

