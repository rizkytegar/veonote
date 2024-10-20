// App.tsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VeoLayouts from './Layouts/VeoLayouts';
import NotePage from './Pages/NotePage';
import AddNotePage from './Pages/AddNotePage';
import EditNotePage from './Pages/EditNotePage';
const App = () => {
  return (
    <Router>
      <VeoLayouts>
        <Routes>
          <Route path="/" element={<NotePage />} />
          <Route path="/add-note" element={<AddNotePage />} />
          <Route path="/edit-note/:id" element={<EditNotePage />} />
        </Routes>
      </VeoLayouts>
    </Router>
  );
};

export default App;
