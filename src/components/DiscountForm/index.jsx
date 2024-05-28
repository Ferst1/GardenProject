import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import s from './DiscountForm.module.css';
import HandsImage from '../../media/images/image-order.png';
import Button from '../UI/Button/index'; 
import Input from '../UI/Input/index';
import ErrorIcon from '../../media/icons/error-icon.svg'; 

export default function DiscountForm(props) {
  const {
    title = '5% off on the first order',
    buttons = { submit: 'Get a discount' },
    input = { name: 'Name', phone: 'Phone number', email: 'Email' },
  } = props;

  const ButtonRef = useRef();
  const [timer, setTimer] = useState(0);
  const [startTimer] = useState(false);
  const [id, setId] = useState(null);
  const [errorMessages, setErrorMessages] = useState([]); 
  const [currentErrorIndex, setCurrentErrorIndex] = useState(0); 
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    if (startTimer) {
      setId(setInterval(decrementTime, 1000));
    } else {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [startTimer]);

  useEffect(() => {
    const messages = [];
    if (errors.fullname) messages.push(errors.fullname.message || 'Invalid name entered');
    if (errors.email) messages.push(errors.email.message || 'Invalid email entered');
    if (errors.phone) messages.push(errors.phone.message || 'Invalid phone number entered');
    setErrorMessages(messages);
  }, [errors]);

  useEffect(() => {
    setCurrentErrorIndex(0);
  }, [errorMessages]);

  const decrementTime = () => {
    if (timer > 0) {
      setTimer((prevState) => prevState - 1);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const displayNextError = () => {
    setCurrentErrorIndex((prevIndex) => (prevIndex + 1) % errorMessages.length);
  };

  const [isSubmitted, setIsSubmitted] = useState(false); 

  return (
    <div className={s.form_section}>
      <div className={s.form_container}>
        
        <h1>{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(input).map((key) => (
            <Input
              key={key}
              {...register(key, {
                required: `${input[key]} is required`,
                pattern: {
                  value: key === 'phone' ? /^\+?[\d\-.\s]{10,15}$/ : key === 'email' ? /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/ : /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                  message: key === 'phone' ? 'Invalid phone number format' : key === 'email' ? 'Invalid email address' : 'Invalid name format, try on english',
                },
              })}
              placeholder={input[key]}
              className={s.input}
            />
          ))}
          {errorMessages.length > 0 && (
            <div>
              <div className={s.error_message}>
                <p className={s.warning_text}>
                  <img src={ErrorIcon} className={s.error_icon} alt="Error" />{errorMessages[currentErrorIndex]}
                </p>
              </div>
            </div>
          )}
          {isSubmitted && ( 
            <p className={s.success_text}>Данные успешно отправлены!</p>
          )}
          <Button text={buttons.submit} ref={ButtonRef} onClick={displayNextError} />
        </form>
        <img src={HandsImage} alt="Hands holding garden tools" className={s.form_image} />
      </div>
    </div>
  );
}

