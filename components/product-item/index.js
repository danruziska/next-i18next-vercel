import Link from 'next/link';
import { some } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavProduct } from './../../store/actions/userActions';
import { useTranslation } from 'next-i18next';

const ProductItem = ({ discount, productImage, id, name, price, currentPrice }) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector(state => state.user);

  const isFavourite = some(favProducts, productId => productId === id);

  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id,
      }
    ))
  }

  const { t } = useTranslation(['common']);

  return (
    <div className="product-item">
      <div className="product__image">
        <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>

        <Link href={`/product/${id}`}>
          <a>
            <img src={productImage} alt="product" />
            {discount && 
              <span className="product__discount">{discount}%</span>
            }
          </a>
        </Link>
      </div>
      
      <div className="product__description">
        <h3>{name}</h3>
        <div className={"product__price " + (discount ? 'product__price--discount' : '')} >
          <h4>{t('currency_sign') + currentPrice }</h4>

          {discount &&  
            <span>{t('currency_sign') + price }</span>
          }
        </div>
      </div>
    </div>
  )
};


export default ProductItem