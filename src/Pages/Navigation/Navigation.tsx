import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from '../Accueil/Accueil';
import BlocNotes from '../BlocNotes/BlocNotes';
import Calculette from '../Calculette/Calculette';

const Messages = React.lazy(() => import('../Messages/Messages'));

const Navigation = () => (
  <Suspense fallback={<div>test</div>}>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/bloc-notes" element={<BlocNotes />} />
      <Route path="/calculette" element={<Calculette />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  </Suspense>
);

export default Navigation;
