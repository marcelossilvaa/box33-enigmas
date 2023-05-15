import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/Error';
import { HomePage } from './pages/Home';
import { RiddlesPage } from './pages/Riddles';
import { DefaultLayout } from './styles/DefaultLayout';
import { CampaignMode } from './pages/CampaignMode';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/riddlespage" element={<RiddlesPage />} />
        <Route path="/campaignmode" element={<CampaignMode />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
