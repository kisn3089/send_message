import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import ViewPage from './pages/ViewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreatePage />} />
        <Route path="/view/:title/:content" element={<ViewPage />} />
        <Route path="*" element={<Navigate to="/create" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
