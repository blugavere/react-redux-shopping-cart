import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../../reducer';
import Button from '../../elements/Button';
import { DEFAULT_BUTTON_TEXTS } from '../../constants';

const AddToCart = (props) => {
  const { styles, text, item, disabled, addToCart } = props;
  return(
    <Button 
      styles={styles}
      disabled={disabled}
      className='rrshoppingcart--button-add'
      onClick={ () => addToCart(item) }>
        { text }
    </Button>
  )
}

AddToCart.defaultProps = {
  item: {},
  text: DEFAULT_BUTTON_TEXTS.ADD,
  styles: '',
  disabled: false,
}

AddToCart.propTypes = {
  item: PropTypes.object.isRequired,
  text: PropTypes.string,
  styles: PropTypes.string,
  disabled: PropTypes.bool,
  addToCart: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(AddToCart);
