import React from 'react';
import PropTypes from 'prop-types';
import s from './OrderDetailsCard.module.css';
import OrderDetailsForm from '../OrderDetailsForm';

const OrderDetailsCard = ({ totalItems, totalPrice }) => {
  return (
    <div className={s.order_details_wrapper}>
      <h3>Order details</h3>
      <div className={s.detail_row_total}>
        <p>{totalItems}</p>
        <p>Items</p>
      </div>
      <div className={s.detail_row}>
        <p>Total</p>
        <p className={s.total_price}>${totalPrice}</p>
      </div>
      <OrderDetailsForm />
    </div>
  );
};

OrderDetailsCard.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default OrderDetailsCard;
