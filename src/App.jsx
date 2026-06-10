import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AdministrationPage from "./pages/AdministrationPage";
import TrainingPage from "./pages/TrainingPage";
import MaterialBase from "./pages/MaterialBase";
import Header from "./components/Header";
import DocumentPage from "./pages/DocumentsPage";
import EducationPage from "./pages/EducationPage";
import CertificatePage from "./pages/CertificatePage";
import DetailsPage from "./pages/DetailsPage";
import StandardsPage from "./pages/StandardsPage";
import StructurePage from "./pages/StructurePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/knowledge" element={<TrainingPage />} />
        <Route path="/materials" element={<MaterialBase />} />
        <Route path="/documents" element={<DocumentPage />}></Route>
        <Route path="/education" element={<EducationPage />}></Route>
        <Route path="/certificate" element={<CertificatePage />}></Route>
        <Route path="/details" element={<DetailsPage />}></Route>
        <Route path="/standards" element={<StandardsPage />}></Route>
        <Route path="/structure" element={<StructurePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
