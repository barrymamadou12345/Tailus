
import React from 'react';
import './App.css';
import { PageTemplate, PageTemplate2 } from './components/PageTemplate';
import Alt  from "./components/TemplateNum1/Alt";
import Aria  from "./components/TemplateNum4/Aria";
import { PageAccueil } from './components/composPageAccueil/PageAccueil';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnsembleTemp2 from './components/TemplateNum2/EnsembleTemp2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<PageAccueil />} />
          <Route path="/accueil" element={<PageAccueil />} />
          <Route path="/template1" element={<Alt />} />
          <Route path="/template2" element={<EnsembleTemp2 />} />
          <Route path="/template3" element={<PageTemplate />} />
          <Route path="/template4" element={<PageTemplate2 />} />
          <Route path="/template5" element={<Aria />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;