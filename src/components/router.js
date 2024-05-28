

import { createBrowserRouter } from "react-router-dom";
import SharedLayout from './SharedLayout';
import MainPage from '../pages/MainPage';
import CategoriesPage from '../pages/CategoriesPage'; 
import AllProductsPage from '../pages/AllProductsPage'; 
import AllSalesPage from '../pages/AllSalesPage'; 
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { path: "main_page", element: <MainPage /> },
      { path: "categories", element: <CategoriesPage /> },
      { path: "all_products", element: <AllProductsPage /> },
      { path: "all_sales", element: <AllSalesPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export { router };
