

import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import styled from "./CardSkeleton.module.css";

const CardSkeleton = () => {
  return (
    <div className={styled.card_skeleton}>
      <div className={styled.card_images}>
        <Skeleton width="100%" height="100%" />
      </div>
      <div style={{ padding: '20px' }}>
        <Skeleton className={styled.skeleton_text} width="80%" height={30} style={{ marginBottom: '10px' }} />
        <Skeleton className={styled.skeleton_text} width="60%" height={30} />
      </div>
    </div>
  );
}

export default CardSkeleton;
