import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import ErrorPage from '../pages/ErrorPage';

import ProductDetailPage from '../pages/ProductDetailPage';




const MainPage = lazy(() => import('../pages/MainPage'));
const CategoriesPage = lazy(() => import('../pages/CategoriesPage'));
const AllProductsPage = lazy(() => import('../pages/AllProductsPage'));
const AllSalesPage = lazy(() => import('../pages/AllSalesPage'));
const CategoryProductsPage = lazy(() => import('../pages/CategoryProductsPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: 'categories',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CategoriesPage />
          </Suspense>
        ),
      },
      {
        path: 'all_products',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AllProductsPage />
          </Suspense>
        ),
      },
      {
        path: 'all_sales',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AllSalesPage />
          </Suspense>
        ),
      },
      {
        path: 'product/:productId', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'category/:categoryId',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CategoryProductsPage />
          </Suspense>
        ),
      },
      {
        path: 'favorites',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <FavoritesPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export { router };
