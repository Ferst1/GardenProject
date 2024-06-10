import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import SaleCards from '../SaleCards';
import ButtonSection from '../UI/ButtonSection';
import { fetchProducts } from '../../redux/actions/productsActions';
import s from './SaleSection.module.css';

const SaleSection = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const saleProducts = products
    .filter(product => product.discont_price)
    .sort((a, b) => a.discont_price - b.discont_price)
    .slice(0, 4);

  return (
    <div>
      <section>
        <div className={s.title_wrapper}>
          <h2>Sale</h2>
          <div className={s.button_with_line}>
            <ButtonSection text="All sales" />
          </div>
        </div>
        <SaleCards products={saleProducts} />
      </section>
    </div>
  );
};

export default SaleSection;
