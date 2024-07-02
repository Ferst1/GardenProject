
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import styled from "./CardDetailsSceleton.module.css";

const CardDetailsSceleton = () => {
 
  return (
    <div className='container'>
    <div className={styled.product_detail}>
      <div className={styled.title_favorite_wrapper}>
        <Skeleton width="80%" height={40} />
        <Skeleton width="20%" height={40} />
      </div>
      <div className={styled.wrapper_img}>
        <Skeleton className={styled.card_images} />
      </div>
      <div className={styled.product_detail_content}>
        <Skeleton className={styled.title_container} width="70%" height={32} />
        <Skeleton className={styled.product_price} width="15%" height={50} />
        <Skeleton className={styled.skeleton_button} width="90%" height={58} />
      </div>
      <div className={styled.description_wrapper}>
        <Skeleton className={styled.product_description} width="30%" height={20} />
        <Skeleton className={styled.product_description} width="95%" height={20} />
        <Skeleton className={styled.product_description} width="100%" height={20} />
        <Skeleton className={styled.product_description} width="100%" height={20} />
        <Skeleton className={styled.product_description} width="25%" height={15} />
      </div>
    </div>
    </div>
  );
}

export default CardDetailsSceleton;

