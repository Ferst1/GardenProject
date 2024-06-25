
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, incrementProductCount, decrementProductCount, addToFavorites, removeFromFavorites } from '../../redux/actions/productsActions';
import styles from './ProductDetail.module.css';
import ButtonAddToCard from '../UI/ButtonAddToCard';
import { baseUrl } from '../../instance';
import Favorite from '../UI/Favorite';
import ButtonCounter from '../UI/ButtonCounter';
import { openModal } from '../../redux/actions/modalActions';
import ModalWindowContainer from '../ModalWindowContainer';
import { formatPrice } from '../../utils';

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { product, loading, error, favorites = [] } = useSelector((state) => state.products);
    const [isFavorite, setIsFavorite] = useState(false);
    const [productCount, setProductCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch, productId]);

    useEffect(() => {
        if (Array.isArray(favorites)) {
            setIsFavorite(favorites.some(fav => fav.id === product?.id));
        }
    }, [favorites, product]);

    const handleIncrement = () => {
        setProductCount(productCount + 1);
        dispatch(incrementProductCount());
    };

    const handleDecrement = () => {
        if (productCount > 0) {
            setProductCount(productCount - 1);
            dispatch(decrementProductCount());
        }
    };

    const handleAddToFavorites = () => {
        if (!isFavorite) {
            dispatch(addToFavorites(product));
        } else {
            dispatch(removeFromFavorites(product));
        }
        setIsFavorite(!isFavorite);
    };

    const handleImageClick = () => {
        dispatch(openModal({ image: `${baseUrl}${product.image}` }));
    };

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    let discount = null;
    if (product.price && product.discont_price) {
        discount = Math.round(((product.price - product.discont_price) / product.price) * 100);
    }

    const totalPrice = product.discont_price ? product.discont_price * productCount : product.price * productCount;

    return (
        <>
            <div className={`${styles.product_detail} ${darkMode ? styles.dark : ''}`}>
                <img
                    src={`${baseUrl}${product.image}`}
                    alt={product.title}
                    className={`${styles.category_img} ${darkMode ? styles.dark : ''}`}
                    onClick={handleImageClick} 
                />
                <div className={`${styles.product_detail_content} ${darkMode ? styles.dark : ''}`}>
                    <div className={styles.title_favorite_wrapper}>
                        <h4>{product.title}</h4>
                        <Favorite
                            isDarkMode={false}
                            onClick={handleAddToFavorites}
                            isFavorite={isFavorite}
                        />
                    </div>
                    <div className={styles.product_price}>
                        {formatPrice(totalPrice)}€
                        {product.discont_price && (
                            <span className={styles.discont_price}>
                                {formatPrice(product.discont_price)}€
                            </span>
                        )}
                        {discount !== null && (
                            <div className={styles.discont_tag}>{`-${discount}%`}</div>
                        )}
                    </div>
                    <div className={styles.controls_and_cart}>
                        <ButtonCounter 
                            productCount={productCount}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                        />
                        <ButtonAddToCard 
                            product={{ ...product, count: productCount }}
                        /> 
                    </div>
                    <div className={`${styles.description_wrapper} ${darkMode ? styles.dark : ''}`}>
                        
                        <h5>Description</h5>
                        <div className="product-description">
                            {showFullDescription ? (
                                <p>{product.description}</p>
                            ) : (
                                <p>{product.description.substring(0, 150)}...</p>
                            )}
                            <button className={`${styles.product_desc} ${darkMode ? styles.dark : ''}`} onClick={toggleDescription}>
                                {showFullDescription ? 'Read less' : 'Read more'}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <ModalWindowContainer />
        </>
    );
};

export default ProductDetail;
