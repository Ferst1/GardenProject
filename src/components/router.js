

import { createBrowserRouter } from "react-router-dom";
import SharedLayout from './SharedLayout';
import MainPage from '../pages/MainPage';
import CategoriesPage from '../pages/CategoriesPage'; 
import AllProductsPage from '../pages/AllProductsPage'; 
import AllSalesPage from '../pages/AllSalesPage'; 
import ErrorPage from '../pages/ErrorPage';
import CategoryProductsPage from "../pages/CategoryProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "categories", element: <CategoriesPage /> },
      { path: "all_products", element: <AllProductsPage /> },
      { path: "all_sales", element: <AllSalesPage /> },
      { path: "category/:categoryId", element: <CategoryProductsPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export { router };
