import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ProductInfo from '../../atoms/productInfo';
import ProductQuantity from '../../atoms/productQuantity';
import textKeys from '../../../../constants/textKeys';
import styles from './productItem.module.css';


const ProductItem = ({data}) => {
  const availableProduct = data.available && data.quantity > 0;

  return (
    <Card className={styles.box}>
      <ProductInfo name={data.name} price={data.price} quantity={data.quantity} />
      { availableProduct ?
        <ProductQuantity id={data.id} inCart={1} quantity={data.quantity} />
        :
        <Typography variant="subtitle2" component="h5" color="error" gutterBottom>
          {textKeys.productsKeys.ITEM_UNAVAILABLE}
        </Typography>
      }
    </Card>
  );
};


ProductItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    available: PropTypes.bool,
  }).isRequired,
};


export default ProductItem;
