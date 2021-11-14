import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from '../Accueil/Accueil';
import BlocNotes from '../BlocNotes/BlocNotes';
import Calculette from '../Calculette/Calculette';
import Messages from '../Messages/Messages';

const Navigation = () => {
  useEffect(() => {
    document.title = 'Accueil';
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/bloc-notes" element={<BlocNotes />} />
      <Route path="/calculette" element={<Calculette />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  );
};

export default Navigation;
