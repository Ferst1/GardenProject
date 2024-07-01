import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import s from './OrderDetailsCard.module.css';
import { formatPriceWithComma } from '../../utils';
import DiscountForm from '../DiscountForm';

const OrderDetailsCard = ({ totalItems, totalPrice }) => {
  const isDarkMode = useSelector((state) => state.theme.darkMode); 

  return (
    <div className={`${s.order_details_wrapper} ${isDarkMode ? s.dark_mode : ''}`}>
      <h3>Order details</h3>
      <div className={`${s.detail_row_total} ${isDarkMode ? s.dark_mode : ''}`}>
        <p>{totalItems}</p>
        <p>Items</p>
      </div>
      <div className={`${s.detail_row} ${isDarkMode ? s.dark_mode : ''}`}>
        <p>Total</p>
        <p className={s.total_price}>${formatPriceWithComma(totalPrice)}</p>
      </div>
      <DiscountForm
        isAlternativeStyle={true}  
      />
    </div>
  );
};

OrderDetailsCard.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default OrderDetailsCard;

