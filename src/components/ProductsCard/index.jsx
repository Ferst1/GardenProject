// import React from "react";
// import baseUrl from "../../instance";
// import s from "../ProductsCard/ProductsCard.module.css";
// import Basket from "../Header/Basket";
// import Favorite from "../Header/Favorite";

// const ProductsCard = ({ product }) => {
//   let discount = null;
//   if (product.price && product.discont_price) {
//     discount = Math.round(((product.price - product.discont_price) / product.price) * 100);
//   }

//   return (
//     <div className={s.product_item}>
//       <div className={s.category_content}>
//         <div className={s.cards_button}>
//           <Basket />
//           <Favorite />
//           {product.image && (
//             <img
//               className={s.category_img}
//               src={`${baseUrl}${product.image}`}
//               alt={product.title}
//             />
//           )}
//           {discount !== null && (
//             <div className={s.discont_tag}>{`-${discount}%`}</div>
//           )}
//           <div className={s.product_title}>{product.title}</div>
//           <div className={s.product_price}>
//             ${product.price}
//             {product.discont_price && (
//               <span className={s.discont_price}>
//                 ${product.discont_price}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsCard;



import React from "react";
import baseUrl from "../../instance";
import s from "../ProductsCard/ProductsCard.module.css";
import Basket from "../Header/Basket";
import Favorite from "../Header/Favorite";

const ProductsCard = ({ product }) => {
  let discount = null;
  if (product.price && product.discont_price) {
    discount = Math.round(((product.price - product.discont_price) / product.price) * 100);
  }

  return (
    <div className={s.product_item}>
      <div className={s.category_content}>
        <div className={s.cards_button}>
          <Basket />
          <Favorite />
          {product.image && (
            <img
              className={s.category_img}
              src={`${baseUrl}${product.image}`}
              alt={product.title}
            />
          )}
          {discount !== null && (
            <div className={s.discont_tag}>{`-${discount}%`}</div>
          )}
          <div className={s.product_title}>{product.title}</div>
          <div className={s.product_price}>
            ${product.price}
            {product.discont_price && (
              <span className={s.discont_price}>
                ${product.discont_price}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
