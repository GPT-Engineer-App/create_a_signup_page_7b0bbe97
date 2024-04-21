import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from './pages/Signup.jsx';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
