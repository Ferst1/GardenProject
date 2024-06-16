import React, { useState } from 'react';
import FavLight from '../../../media/icons/favorite-light-transparent-icon.svg';
import FavDark from '../../../media/icons/favorite-transparent-night-icon.svg';
import FavDarkDark from '../../../media/icons/favorite-hover-dark.svg';
import s from './FavoriteHeader.module.css';

const FavoriteHeader = ({ isDarkMode, isFavorite }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getIcon = () => {
        if (isFavorite) {
            return isDarkMode ? FavLight : FavDark;
        } else {
            return isHovered ? FavDarkDark : FavDark;
        }
    };

    return (
        <div 
            className={s.favorite}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={getIcon()} 
                alt="Favorite Icon" 
                className={s.favoriteIcon} 
            />
        </div>
    );
};

export default FavoriteHeader;
