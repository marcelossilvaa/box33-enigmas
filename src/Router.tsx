import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { ResolutionPage } from './pages/Resolution';
import { RiddlesPage } from './pages/Riddles';
import { DefaultLayout } from './styles/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/riddlespage" element={<RiddlesPage />} />
        <Route path="/resolutionpage" element={<ResolutionPage />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Route>
    </Routes>
  );
}
