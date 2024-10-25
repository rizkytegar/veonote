import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NotesProvider from './Components/NotesProvider';
import ThemeProvider from './Components/ThemeProvider';
import VeoLayouts from './Layouts/VeoLayouts';
import AddNotePage from './Pages/AddNotePage';
import EditNotePage from './Pages/EditNotePage';
import NotePage from './Pages/NotePage';

const App = () => {
  return (
    <ThemeProvider>
      <NotesProvider>
        <Router>
          <VeoLayouts>
            <Routes>
              <Route path="/" element={<NotePage />} />
              <Route path="/add-note" element={<AddNotePage />} />
              <Route path="/edit-note/:id" element={<EditNotePage />} />
            </Routes>
          </VeoLayouts>
        </Router>
      </NotesProvider>
    </ThemeProvider>
  );
};

export default App;
