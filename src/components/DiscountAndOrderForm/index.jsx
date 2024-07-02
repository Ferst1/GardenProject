
// import React, { useRef, useState, useEffect, useCallback } from 'react';
// import { useForm } from 'react-hook-form';
// import s from './DiscountForm.module.css';
// import HandsImage from '../../media/images/image-order.png';
// import Button from '../UI/Button/index';
// import Input from '../UI/Input/index';
// import { useSelector, useDispatch } from 'react-redux';
// import { openModal } from '../../redux/slices/modalSlice';

// export default function DiscountForm(props) {
//   const darkMode = useSelector((state) => state.theme.darkMode);
//   const dispatch = useDispatch();

//   const {
//     title = '5% off on the first order',
//     buttons = { submit: 'Get a discount' },
//     input = { name: 'Name', phone: 'Phone number', email: 'Email' },
//     isAlternativeStyle = false,
//   } = props;

//   const ButtonRef = useRef();
//   const [timer, setTimer] = useState(0);
//   const [id, setId] = useState(null);
//   const [errorMessages, setErrorMessages] = useState([]);
//   const [currentErrorIndex, setCurrentErrorIndex] = useState(0);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [buttonText, setButtonText] = useState(buttons.submit);
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();

//   const decrementTime = useCallback(() => {
//     if (timer > 0) {
//       setTimer((prevState) => prevState - 1);
//     }
//   }, [timer]);

//   useEffect(() => {
//     if (id) {
//       const intervalId = setInterval(decrementTime, 1000);
//       setId(intervalId);
//       return () => clearInterval(intervalId);
//     }
//     clearInterval(id);
//   }, [id, decrementTime]);

//   useEffect(() => {
//     const messages = [];
//     ['name', 'phone', 'email'].forEach((field) => {
//       if (errors[field]) {
//         messages.push(errors[field].message || `Invalid ${field} entered`);
//       }
//     });
//     setErrorMessages(messages);
//   }, [errors]);

//   useEffect(() => {
//     setCurrentErrorIndex(0);
//   }, [errorMessages]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 360) {
//         setSvgSize({ width: '16px', height: '16px' });
//       } else {
//         setSvgSize({ width: '20px', height: '20px' });
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);




//   const onSubmit = (data) => {
//     console.log(data);
//     setIsSubmitted(true);
//     setButtonText('Request Submitted');
//     reset();
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setButtonText(buttons.submit);
//     }, 5000);

//     if (isAlternativeStyle) {
//       dispatch(openModal({ type: 'CONFIRMATION' }));
//     }
//   };


  

//   const displayNextError = () => {
//     setCurrentErrorIndex((prevIndex) => (prevIndex + 1) % errorMessages.length);
//   };

//   const [svgSize, setSvgSize] = useState({ width: '20px', height: '20px' });

//   return (
//     <div className={`${s.form_section} ${isAlternativeStyle ? s.alternative_form_section : ''} ${darkMode ? s.dark_mode : ''}`}>
//       <div className={`${s.form_container} ${isAlternativeStyle ? s.alternative_form_container : ''}`}>
//         {!isAlternativeStyle && <h3>{title}</h3>}
//         <form onSubmit={handleSubmit(onSubmit)} className={`${isAlternativeStyle ? s.form_alternative : ''}`}>
//           {Object.keys(input).map((key) => (
//             <Input
//               key={key}
//               {...register(key, {
//                 required: `${input[key]} is required`,
//                 pattern: {
//                   value: key === 'phone' ? /^\+?[\d\-.\s]{10,15}$/ : key === 'email' ? /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/ : /^[A-Za-z]+(?: [A-Za-z]+)*$/,
//                   message: key === 'phone' ? 'Invalid phone number format. Try again' : key === 'email' ? 'Invalid email address. Try again' : 'Invalid name format, try on english',
//                 }
//               })}
//               placeholder={input[key]}
//               isAlternativeStyle={isAlternativeStyle}
//               className={`${s.input} ${isAlternativeStyle ? s.input_alternative : ''} ${darkMode && isAlternativeStyle ? s.dark_mode_input : ''}`}
//               onChange={key === 'phone' ? (e) => {
//                 const inputValue = e.target.value;
//                 if (inputValue.length > 15) {
//                   e.target.value = inputValue.slice(0, 15);
//                 }
//               } : undefined}
//             />
//           ))}
//           {errorMessages.length > 0 && (
//             <div>
//               <div className={s.error_message}>
//                 <p className={`${s.warning_text} ${isAlternativeStyle ? s.warning_text_alternative : ''} ${darkMode && isAlternativeStyle ? s.dark_mode_warning_text : ''}`}>
//                   <svg
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{ width: svgSize.width, height: svgSize.height, marginRight: '5px' }}
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       d="M6.5502 1.66699H13.4502L18.3335 6.55032V13.4503L13.4502 18.3337H6.5502L1.66687 13.4503V6.55032L6.5502 1.66699Z"
//                       fill="#CB0505"
//                       stroke="#FFFFF1"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M13.0001 7L7.00012 13"
//                       stroke="#FFFFF1"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.00012 7L13.0001 13"
//                       stroke="#FFFFF1"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   {errorMessages[currentErrorIndex]}
//                 </p>
//               </div>
//             </div>
//           )}
//           {isSubmitted && (
//             <p className={`${s.success_text} ${isAlternativeStyle ? s.success_text_alternative : ''} ${darkMode && isAlternativeStyle ? s.dark_mode_success_text : ''}`}>The discount has been successfully sent by email</p>
//           )}
//           <Button
//             text={isAlternativeStyle ? 'Order' : buttonText}
//             ref={ButtonRef}
//             onClick={displayNextError}
//             className={`submit_button ${isSubmitted ? s.greenBackground : ''} ${isAlternativeStyle ? s.button_alternative : ''} ${darkMode && isAlternativeStyle ? s.dark_mode_button : ''}`}
//           />
//         </form>
//         {!isAlternativeStyle && <img src={HandsImage} alt="Hands holding garden tools" className={s.form_image} />}
//       </div>
//     </div>
//   );
// }



import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import s from './DiscountForm.module.css';
import HandsImage from '../../media/images/image-order.png';
import Button from '../UI/Button/index';
import Input from '../UI/Input/index';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../redux/slices/modalSlice';

export default function DiscountForm(props) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const {
    title = '5% off on the first order',
    buttons = { submit: 'Get a discount' },
    input = { name: 'Name', phone: 'Phone number', email: 'Email' },
    isAlternativeStyle = false,
  } = props;

  const ButtonRef = useRef();
  const [timer, setTimer] = useState(0);
  const [id, setId] = useState(null);
  const [errorMessages, setErrorMessages] = useState([]);
  const [currentErrorIndex, setCurrentErrorIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState(buttons.submit);
  const [serverResponse, setServerResponse] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const decrementTime = useCallback(() => {
    if (timer > 0) {
      setTimer((prevState) => prevState - 1);
    }
  }, [timer]);

  useEffect(() => {
    if (id) {
      const intervalId = setInterval(decrementTime, 1000);
      setId(intervalId);
      return () => clearInterval(intervalId);
    }
    clearInterval(id);
  }, [id, decrementTime]);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 360) {
        setSvgSize({ width: '16px', height: '16px' });
      } else {
        setSvgSize({ width: '20px', height: '20px' });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitted(true);
    setButtonText('Request Submitted');

    try {
      const response = await fetch('https://telran-backend.onrender.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setServerResponse(result.message || 'Discount successfully requested');
    } catch (error) {
      setServerResponse('Failed to submit request');
    }

    reset();
    setTimeout(() => {
      setIsSubmitted(false);
      setButtonText(buttons.submit);
      setServerResponse(null);
    }, 5000);

    if (isAlternativeStyle) {
      dispatch(openModal({ type: 'CONFIRMATION' }));
    }
  };

  const displayNextError = () => {
    setCurrentErrorIndex((prevIndex) => (prevIndex + 1) % errorMessages.length);
  };

  const [svgSize, setSvgSize] = useState({ width: '20px', height: '20px' });

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
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: svgSize.width, height: svgSize.height, marginRight: '5px' }}
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M6.5502 1.66699H13.4502L18.3335 6.55032V13.4503L13.4502 18.3337H6.5502L1.66687 13.4503V6.55032L6.5502 1.66699Z"
                      fill="#CB0505"
                      stroke="#FFFFF1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.0001 7L7.00012 13"
                      stroke="#FFFFF1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.00012 7L13.0001 13"
                      stroke="#FFFFF1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {errorMessages[currentErrorIndex]}
                </p>
              </div>
            </div>
          )}
          {isSubmitted && (
            <p className={`${s.success_text} ${isAlternativeStyle ? s.success_text_alternative : ''} ${darkMode && isAlternativeStyle ? s.dark_mode_success_text : ''}`}>{serverResponse || 'The discount has been successfully sent by email'}</p>
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

