import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'; 
import NotFound from './pages/NotFound'; 
import EventsPage from './pages/EventsPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Changed from /home to / for default route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventsPage />} /> {/* Better URL naming */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  )
}

export default App;