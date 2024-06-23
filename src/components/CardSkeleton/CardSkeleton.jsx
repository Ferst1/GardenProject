import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css';
import styled from "./CardSkeleton.module.css"

const CardSkeleton = () => {
  return (
    <div className={styled.card_skeleton}>
<div className={styled.card_images}>
    <Skeleton width={220} height={230}/> 
</div>
<div className={styled.card_title}>
    <Skeleton height={21}/> 
</div>
<div className={styled.card_price}>
    <Skeleton height={41}/> 
</div>

    </div>
  )
}

export default CardSkeleton

