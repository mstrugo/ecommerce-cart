import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import textKeys from '../../../../constants/textKeys';
import { isEqual } from '../../../../helpers';
import styles from './productQuantity.module.css';



const btnProps = {
  size: 'small',
  color: 'primary',
  variant: 'outlined',
};


const ProductQuantity = ({inCart, quantity, /*addItem, removeItem, editItem*/}) => {
  const productIsNotInCart = isEqual(inCart, 0);
  const productIsNotAvailable = isEqual(inCart, quantity);

  const inpProps = {
    type: 'number',
    disabled: productIsNotInCart,
    disableUnderline: productIsNotInCart,
    inputProps: {
      className: styles.text,
      max: quantity,
      min: 0,
    },
    defaultValue: inCart,
    className: styles.quantity,
    // onChange: editItem()
  };

  const btnRemove = {
    ...btnProps,
    disabled: productIsNotInCart,
    // onClick: removeItem()
  };

  const btnAdd = {
    ...btnProps,
    disabled: productIsNotAvailable,
    // onClick: addItem()
  };

  return (
    <div className={styles.box}>
      <Typography variant="overline" component="p">
        {textKeys.productsKeys.ITEM_STOCK} {quantity}
      </Typography>
      <Button {...btnRemove}>{textKeys.productsKeys.ITEM_REMOVE}</Button>
      <Input  {...inpProps} />
      <Button {...btnAdd}>{textKeys.productsKeys.ITEM_ADD}</Button>
    </div>
  );
};


ProductQuantity.propTypes = {
  inCart: PropTypes.number,
  quantity: PropTypes.number.isRequired,
};

ProductQuantity.defaultProps = {
  inCart: 0,
};


export default ProductQuantity;
