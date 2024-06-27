
// import React from 'react';
// import defaultStyles from './DiscountedCheckBox.module.css';
// import checkedIcon from '../../media/icons/check box=active.svg'; 
// import uncheckedIcon from '../../media/icons/check box=normal.svg';

// const DiscountedCheckBox = ({ styles = defaultStyles, setShowDiscounted, showDiscounted }) => {
//   const handleCheckboxClick = () => {
//     setShowDiscounted(!showDiscounted);
//   };

//   return (
//     <div className={styles.discount_wrapper}>
//       <label htmlFor="discounted"><h3>Discounted items</h3></label>
//       <div className={styles.checkbox} onClick={handleCheckboxClick}>
//         <img
//           src={showDiscounted ? checkedIcon : uncheckedIcon} 
//           className={styles.checkbox_image}
//              alt="Discount checkbox"
//         />
//       </div>
//     </div>
//   );
// };

// export default DiscountedCheckBox;


import React from 'react';
import defaultStyles from './DiscountedCheckBox.module.css';
import checkedIcon from '../../media/icons/check box=active.svg'; 
import uncheckedIcon from '../../media/icons/check box=normal.svg';

const DiscountedCheckBox = ({ styles = defaultStyles, setShowDiscounted, showDiscounted }) => {
  const handleCheckboxClick = () => {
    setShowDiscounted(!showDiscounted);
  };

  return (
    <div className={styles.discount_wrapper}>
      <label htmlFor="discounted"><h3>Discounted items</h3></label>
      <div className={styles.checkbox} onClick={handleCheckboxClick}>
        <img
          src={showDiscounted ? checkedIcon : uncheckedIcon} 
          className={styles.checkbox_image}
          alt="Discount checkbox"
        />
      </div>
    </div>
  );
};

export default DiscountedCheckBox;
