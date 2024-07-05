import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import s from './DiscountAndOrderForm.module.css';
import HandsImage from '../../media/images/image-order.png';
import Button from '../UI/Button/index';
import Input from '../UI/Input/index';
import WarningIcon from '../../media/icons/WarningIcon';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../redux/slices/modalSlice';
import { sendOrder } from '../../redux/slices/orderSlice';
import { sendSale } from '../../redux/slices/saleSlice';

export default function DiscountAndOrderForm(props) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const { serverResponse, status: orderStatus, error: orderError } = useSelector((state) => state.order);
  const { serverRes, status: saleStatus, error: saleError } = useSelector((state) => state.sale);

  const {
    title = '5% off on the first order',
    buttons = { submit: 'Get a discount' },
    input = { name: 'Name', phone: 'Phone number', email: 'Email' },
    isAlternativeStyle = false,
  } = props;

  const ButtonRef = useRef();
  const [timer, setTimer] = useState(0);
  const [errorMessages, setErrorMessages] = useState([]);
  const [currentErrorIndex, setCurrentErrorIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState(buttons.submit);
  const [discountValue, setDiscountValue] = useState(5); // 5%

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const decrementTime = useCallback(() => {
    if (timer > 0) {
      setTimer((prevState) => prevState - 1);
    }
  }, [timer]);

  useEffect(() => {
    const intervalId = setInterval(decrementTime, 1000);
    return () => clearInterval(intervalId);
  }, [decrementTime]);

  useEffect(() => {
    const messages = [];
    ['name', 'phone', 'email'].forEach((field) => {
      if (errors[field]) {
        messages.push(errors[field].message || `Invalid ${field} entered`);
      }
    });
    setErrorMessages(messages);
  }, [errors]);

  useEffect(() => {
    setCurrentErrorIndex(0);
  }, [errorMessages]);

  const onSubmit = async (formData) => {
    setIsSubmitted(true);
    setButtonText('Request Submitted');
  
    if (!isAlternativeStyle) {
      let saleData = JSON.parse(localStorage.getItem('saleData')) || {};
      saleData = {
        ...saleData,
        ...formData,
        discount: discountValue
      };
      localStorage.setItem('saleData', JSON.stringify(saleData));
  
      const saleResult = await dispatch(sendSale(saleData));
      if (sendSale.fulfilled.match(saleResult)) {
        console.log('Sale response:', saleResult.payload);
      } else {
        console.error('Error sending sale request:', saleResult.payload);
      }
    }
  
    if (isAlternativeStyle) {
      let orderData = JSON.parse(localStorage.getItem('orderData')) || {};
      orderData = {
        ...orderData,
        ...formData,
        basket: basket
      };
      localStorage.setItem('orderData', JSON.stringify(orderData));
  
      const orderResult = await dispatch(sendOrder(orderData));
      if (sendOrder.fulfilled.match(orderResult)) {
        console.log('Order response:', orderResult.payload);
      } else {
        console.error('Error sending order request:', orderResult.payload);
      }
    }
  
    reset();
    setTimeout(() => {
      setIsSubmitted(false);
      setButtonText(buttons.submit);
    }, 5000);
  
    if (isAlternativeStyle) {
      dispatch(openModal({ type: 'CONFIRMATION' }));
    }
  }; 

  const displayNextError = () => {
    setCurrentErrorIndex((prevIndex) => (prevIndex + 1) % errorMessages.length);
  };

  return (
    <div className={`${s.form_section} ${isAlternativeStyle ? s.alternative_form_section : ''} ${darkMode ? s.dark_mode : ''}`}>
      <div className={`${s.form_container} ${isAlternativeStyle ? s.alternative_form_container : ''}`}>
        {!isAlternativeStyle && <h3>{title}</h3>}
        <form onSubmit={handleSubmit(onSubmit)} className={`${isAlternativeStyle ? s.form_alternative : ''}`}>
          {Object.keys(input).map((key) => (
            <Input
              key={key}
              {...register(key, {
                required: `${input[key]} is required`,
                pattern: {
                  value: key === 'phone' ? /^\+?[\d\-.\s]{10,15}$/ : key === 'email' ? /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/ : /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                  message: key === 'phone' ? 'Invalid phone number format. Try again' : key === 'email' ? 'Invalid email address. Try again' : 'Invalid name format, try on english',
                }
              })}
              placeholder={input[key]}
              isAlternativeStyle={isAlternativeStyle}
              className={`${s.input} ${isAlternativeStyle ? s.input_alternative : ''} ${darkMode && isAlternativeStyle ? s.dark_mode_input : ''}`}
              onChange={key === 'phone' ? (e) => {
                const inputValue = e.target.value;
                if (inputValue.length > 15) {
                  e.target.value = inputValue.slice(0, 15);
                }
              } : undefined}
            />
          ))}
          {errorMessages.length > 0 && (
            <div>
              <div className={s.error_message}>
                <p className={`${s.warning_text} ${isAlternativeStyle ? s.warning_text_alternative : ''} ${darkMode && isAlternativeStyle ? s.dark_mode_warning_text : ''}`}>
                  <WarningIcon/>
                  {errorMessages[currentErrorIndex]}
                </p>
              </div>
            </div>
          )}
          {isSubmitted && (
            <p className={`${s.success_text} ${isAlternativeStyle ? s.success_text_alternative : ''} ${darkMode && isAlternativeStyle ? s.dark_mode_success_text : ''}`}>
              {isAlternativeStyle ? 'The discount has been successfully sent by email' : 
                orderStatus === 'succeeded' ? serverResponse.message :
                  saleStatus === 'succeeded' ? `You have received a ${discountValue}% discount!` : 
                    'The discount has been successfully sent by email'}
            </p>
          )}
          <Button
            text={isAlternativeStyle ? 'Order' : buttonText}
            ref={ButtonRef}
            onClick={displayNextError}
            className={`submit_button ${isSubmitted ? s.greenBackground : ''} ${isAlternativeStyle ? s.button_alternative : ''} ${darkMode && isAlternativeStyle ? s.dark_mode_button : ''}`}
          />
        </form>
        {!isAlternativeStyle && <img src={HandsImage} alt="Hands holding garden tools" className={s.form_image} />}
      </div>
    </div>
  );
}

