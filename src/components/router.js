
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SharedLayout from './SharedLayout';
import ErrorPage from '../pages/ErrorPage';
import ProductDetailPage from '../pages/ProductDetailPage';

const MainPage = lazy(() => import('../pages/MainPage'));
const CategoriesPage = lazy(() => import('../pages/CategoriesPage'));
const AllProductsPage = lazy(() => import('../pages/AllProductsPage'));
const AllSalesPage = lazy(() => import('../pages/AllSalesPage'));
const CategoryProductsPage = lazy(() => import('../pages/CategoryProductsPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
const BasketProductsPage = lazy(() => import('../pages/BasketProductsPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        path: '/',
        element: (
          <SkeletonTheme baseColor="#dddddd" highlightColor="#e0e0e0">
            <Suspense fallback={<div>Loading...</div>}>
              <MainPage />
            </Suspense>
          </SkeletonTheme>
        ),
      },
      {
        path: 'categories',
        element: (
          <SkeletonTheme baseColor="#dddddd" highlightColor="#e0e0e0">
            <Suspense fallback={<div>Loading...</div>}>
              <CategoriesPage />
            </Suspense>
          </SkeletonTheme>
        ),
      },
      {
        path: 'all_products',
        element: (
          <SkeletonTheme baseColor="#dddddd" highlightColor="#e0e0e0">
            <Suspense fallback={<div>Loading...</div>}>
              <AllProductsPage />
            </Suspense>
          </SkeletonTheme>
        ),
      },
      {
        path: 'all_sales',
        element: (
          <SkeletonTheme baseColor="#dddddd" highlightColor="#e0e0e0">
            <Suspense fallback={<div>Loading...</div>}>
              <AllSalesPage />
            </Suspense>
          </SkeletonTheme>
        ),
      },
      {
        path: 'product/:productId',
        element: (
          <SkeletonTheme baseColor="#dddddd" highlightColor="#e0e0e0">
            <Suspense fallback={<div>Loading...</div>}>
              <ProductDetailPage />
            </Suspense>
          </SkeletonTheme>
        ),
      },
      {
        path: 'category/:categoryId',
        element: (
          <SkeletonTheme baseColor="#dddddd" highlightColor="#e0e0e0">
            <Suspense fallback={<div>Loading...</div>}>
              <CategoryProductsPage />
            </Suspense>
          </SkeletonTheme>
        ),
      },
      {
        path: 'favorites',
        element: (
          <SkeletonTheme baseColor="#dddddd" highlightColor="#e0e0e0">
            <Suspense fallback={<div>Loading...</div>}>
              <FavoritesPage />
            </Suspense>
          </SkeletonTheme>
        ),
      },
      {
        path: 'basket',
        element: (
          <SkeletonTheme baseColor="#dddddd" highlightColor="#e0e0e0">
            <Suspense fallback={<div>Loading...</div>}>
              <BasketProductsPage />
            </Suspense>
          </SkeletonTheme>
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
