import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/SharedLayout';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage'; 
import AllProductsPage from './pages/AllProductsPage'; 
import AllSalesPage from './pages/AllSalesPage'; 
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/main_page" element={<MainPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="all_products" element={<AllProductsPage />} />
            <Route path="all_sales" element={<AllSalesPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

