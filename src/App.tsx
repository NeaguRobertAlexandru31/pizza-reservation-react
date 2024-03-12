/* Routing */
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
/* Pages */
import OrderNow from './pages/orderNow';

export default function App() {
  
  return (
    
      <Router>
        <div>
          <Routes>
          <Route path="/"          element={< Navigate to="order-now" />} />
          <Route path="/order-now" element={< OrderNow />} />
          </Routes>
        </div>
      </Router>
    
  )
}