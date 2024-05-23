import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/SharedLayout';
import MainPagePage from './pages/MainPagePage';
import CategoriesPage from './pages/CategoriesPage'; 
import AllProductsPage from './pages/AllProductsPage'; 
import AllSalesPage from './pages/AllSalesPage'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="main_page" element={<MainPagePage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="all_products" element={<AllProductsPage />} />
            <Route path="all_sales" element={<AllSalesPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

