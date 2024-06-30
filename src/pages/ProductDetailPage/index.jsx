
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductDetail from '../../components/ProductDetail';
import ButtonSection from '../../components/UI/ButtonSection';
import s from './ProductDetailPage.module.css';
const ProductDetailPage = ({ favorites, setFavorites }) => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const product = useSelector((state) => state.products.product);


  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="container">
        <div className={s.button_wrapper}>
      <ButtonSection text="Main Page" to="/" />
      <ButtonSection text="Categories" to="/categories" />
      <ButtonSection text="Tools and equipment" onClick={handleGoBack}/>
      {categoryId && <ButtonSection text="Category" />}
      {product && <ButtonSection text={` ${product.title}`}  />}
      </div>
      
      <ProductDetail favorites={favorites} setFavorites={setFavorites}/>
      
    </div>
  );
};

export default ProductDetailPage;
