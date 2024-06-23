import React from 'react';
import { useForm } from 'react-hook-form';
import s from './OrderDetailsForm.module.css';
import Button from '../UI/Button';
import { openModal } from '../../redux/actions/modalActions';
import { useDispatch, useSelector } from 'react-redux';

const OrderDetailsForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch=useDispatch();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const onSubmit = data => {
    console.log(data);
    dispatch(openModal({
      type:'CONFIRMATION'
    }))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${s.form} ${isDarkMode ? s.darkmode : ''}`}>
      <div className={s.formGroup}>
        <input
          id="name"
          type="text"
          placeholder="Name"
          {...register('name', { required: 'Name is required' })}
          className={`${s.input} ${isDarkMode ? s.darkmode : ''}`}
        />
        {errors.name && <p className={s.error}>{errors.name.message}</p>}
      </div>
      
      <div className={s.formGroup}>
        <input
          id="phone"
          type="tel"
          placeholder="Phone number"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]+$/,
              message: 'Phone number is invalid'
            }
          })}
          className={`${s.input} ${isDarkMode ? s.darkmode : ''}`}
        />
        {errors.phone && <p className={s.error}>{errors.phone.message}</p>}
      </div>
      
      <div className={s.formGroup}>
        <input
          id="email"
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Email is invalid'
            }
          })}
          className={`${s.input} ${isDarkMode ? s.darkmode : ''}`}
        />
        {errors.email && <p className={s.error}>{errors.email.message}</p>}
      </div>
      
      <Button type="submit" className={s.button} text="Order">Submit</Button>
    </form>
  );
};

export default OrderDetailsForm;
