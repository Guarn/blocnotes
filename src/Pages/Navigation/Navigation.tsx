import { Routes, Route } from 'react-router-dom';
import Accueil from '../Accueil/Accueil';
import BlocNotes from '../BlocNotes/BlocNotes';
import Builder from '../Builder/Builder';
import Calculette from '../Calculette/Calculette';
import Messages from '../Messages/Messages';

const Navigation = () => (
  <Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="/bloc-notes" element={<BlocNotes />} />
    <Route path="/calculette" element={<Calculette />} />
    <Route path="/messages" element={<Messages />} />
    <Route path="/builder" element={<Builder />} />
  </Routes>
);

export default Navigation;
