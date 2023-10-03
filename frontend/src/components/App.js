import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import '../styles/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userpage" element={<PrivateRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
