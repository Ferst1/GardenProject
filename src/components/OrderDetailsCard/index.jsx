import React from 'react';
import PropTypes from 'prop-types';
import s from './OrderDetailsCard.module.css';
import OrderDetailsForm from '../OrderDetailsForm';

const OrderDetailsCard = ({ totalItems, totalPrice }) => {
  return (
    <div className={s.order_details_wrapper}>
      <h3>Order details</h3>
      <div className={s.detail_row}>
        <p>Items</p>
        <p>{totalItems}</p>
      </div>
      <div className={s.detail_row}>
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
      <OrderDetailsForm />
    </div>
  );
};

OrderDetailsCard.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default OrderDetailsCard;
