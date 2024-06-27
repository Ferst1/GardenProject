import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css';
import styled from "./CardSkeleton.module.css"

const CardSkeleton = () => {
  return (
    <div className={styled.card_skeleton}>
<div className={styled.card_images}>
    <Skeleton/> 
</div>
<div className={styled.card_title}>
    <Skeleton/> 
</div>
<div className={styled.card_price}>
    <Skeleton/> 
</div>

    </div>
  )
}

export default CardSkeleton

