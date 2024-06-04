import React from 'react'
import AllProducts from '../../components/AllProducts'
import { fetchProducts } from '../../redux/actions/productsActions'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const AllProductsPage = () => {

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='container'>
<AllProducts products={products}/>

    </div>
  )
}

export default AllProductsPage