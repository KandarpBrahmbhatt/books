import './App.css'
import LoginForm from './Componets/Login/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from './Componets/Product/Product.jsx'
import Navbar from './Componets/Navbar/Navbar.jsx'
import ProductDetail from './Componets/Product/pd.jsx'
// import Card from './Componets/Card/Card.jsx'
import Cart from './Componets/Cart/Cart.jsx'

import { Provider } from "react-redux"
import { store } from './Redux/Store.jsx'
import { AuthProvider } from './AuthContext.jsx'

import Dashboard from './Dashbord.jsx'
import ProtectedRoute from './ProtectedRoutes.jsx' // Make sure this file exists

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/product" element={
                <ProtectedRoute>
                  <Product />
              </ProtectedRoute>} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </Provider>
    </AuthProvider>
  )
}

export default App