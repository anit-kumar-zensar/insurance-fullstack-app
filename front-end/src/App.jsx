import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateProposal from "./pages/CreateProposal";

import ProtectedRoute from "./routes/ProtectedRoute.jsx";

import { AuthProvider } from "./context/AuthProvider";
import ProposalPage from "./pages/ProposalPage.jsx";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-proposal" element={<CreateProposal />} />
          <Route path="/proposals" element={<ProposalPage />} />
          <Route
            path="/dashboard/:id"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
