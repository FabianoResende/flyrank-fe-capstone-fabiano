import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeView } from './pages/home/home.view';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
