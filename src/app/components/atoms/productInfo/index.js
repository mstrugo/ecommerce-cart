import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './productInfo.module.css';


const ProductInfo = ({name, price, img, quantity}) => {
  return (
    <Fragment>
      <CardMedia
        component="img"
        height="140"
        alt={name}
        image={img}
        title={name}
        className={styles.pic}
      />
      <CardContent>
        <Typography align="left" variant="h5" component="h3">
          {name}
        </Typography>
        <Typography align="right" variant="subtitle1" component="h4">
          {price}
        </Typography>
      </CardContent>
    </Fragment>
  );
}


ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  img: PropTypes.string,
};

ProductInfo.defaultProps = {
  img: "https://picsum.photos/300/140/?random",
};

export default ProductInfo;
