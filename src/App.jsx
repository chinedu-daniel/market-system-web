// import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/auth/useAuth";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? ( <Navigate to="/dashboard" replace />) : ( <LoginPage /> )
          } 
        />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/dashboard" element={isAuthenticated ? ( <DashboardPage /> ) : ( <Navigate to="/login" replace /> )} />

        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;