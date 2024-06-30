
// import React, { useState, useEffect } from 'react';
// import FavDark from '../../../media/icons/favorite-transparent-night-icon.svg';
// import FavDarkDark from '../../../media/icons/favorite-hover-dark.svg';
// import FavLight from '../../../media/icons/favorite-light-transparent-icon.svg';
// import FavLightLight from '../../../media/icons/favoriteLightLightLight.svg';
// import s from './FavoriteHeader.module.css';

// const FavoriteHeader = ({ darkMode, isFavorite }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [currentIcon, setCurrentIcon] = useState(null);

//     useEffect(() => {
//         if (isFavorite) {
//             if (darkMode) {
//                 setCurrentIcon(isHovered ? FavLightLight : FavLight);
//             } else {
//                 setCurrentIcon(isHovered ? FavDarkDark : FavDark);
//             }
//         } else {
//             if (darkMode) {
//                 setCurrentIcon(isHovered ? FavLightLight : FavLight);
//             } else {
//                 setCurrentIcon(isHovered ? FavDarkDark : FavDark);
//             }
//         }
//     }, [darkMode, isFavorite, isHovered]);

//     const handleMouseEnter = () => {
//         setIsHovered(true);
//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//     };

//     return (
//         <div
//             className={s.favorite}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             <img
//                 src={currentIcon}
//                 alt="Favorite Icon"
//                 className={s.favoriteIcon}
//             />
//         </div>
//     );
// };

// export default FavoriteHeader;


// import React, { useState, useEffect } from 'react';
// import FavDark from '../../../media/icons/favorite-transparent-night-icon.svg';
// import FavDarkDark from '../../../media/icons/favorite-hover-dark.svg';
// import FavLight from '../../../media/icons/favorite-light-transparent-icon.svg';
// import FavLightLight from '../../../media/icons/favoriteLightLightLight.svg';
// import s from './FavoriteHeader.module.css';

// const FavoriteHeader = ({ darkMode, isFavorite }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [currentIcon, setCurrentIcon] = useState(FavLight);

//     useEffect(() => {
//         let icon;
//         if (isFavorite) {
//             icon = darkMode ? (isHovered ? FavLightLight : FavLight) : (isHovered ? FavDarkDark : FavDark);
//         } else {
//             icon = darkMode ? (isHovered ? FavLightLight : FavLight) : (isHovered ? FavDarkDark : FavDark);
//         }
//         setCurrentIcon(icon);
//     }, [darkMode, isFavorite, isHovered]);

//     const handleMouseEnter = () => setIsHovered(true);
//     const handleMouseLeave = () => setIsHovered(false);

//     return (
//         <div
//             className={s.favorite}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             <img
//                 src={currentIcon}
//                 alt="Favorite Icon"
//                 className={s.favoriteIcon}
//             />
//         </div>
//     );
// };

// export default FavoriteHeader;


import React, { useState, useEffect } from 'react';
import FavDark from '../../../media/icons/favorite-transparent-night-icon.svg';
import FavDarkDark from '../../../media/icons/favorite-hover-dark.svg';
import FavLight from '../../../media/icons/favorite-light-transparent-icon.svg';
import FavLightLight from '../../../media/icons/favoriteLightLightLight.svg';
import s from './FavoriteHeader.module.css';

const FavoriteHeader = ({ darkMode, isFavorite }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentIcon, setCurrentIcon] = useState(FavLight);

    useEffect(() => {
        const getIcon = () => {
            if (darkMode) {
                return isHovered ? FavLightLight : FavLight;
            } else {
                return isHovered ? FavDarkDark : FavDark;
            }
        };
        setCurrentIcon(getIcon());
    }, [darkMode, isHovered]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div
            className={s.favorite}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={currentIcon}
                alt="Favorite Icon"
                className={s.favoriteIcon}
            />
        </div>
    );
};

export default FavoriteHeader;
