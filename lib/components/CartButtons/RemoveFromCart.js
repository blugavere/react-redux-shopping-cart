import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromCart } from '../../reducer';
import Button from '../../elements/Button';
import { DEFAULT_BUTTON_TEXTS } from '../../constants';

const RemoveFromCart = (props) => {
  const { styles, text, item, disabled, removeFromCart } = props;
  return(
    <Button 
      styles={styles} 
      disabled={disabled}
      className='rrshoppingcart-remove-btn'
      onClick={ () => removeFromCart(item) }>
        { text }
    </Button>
  )
}

RemoveFromCart.defaultProps = {
  item: {},
  text: DEFAULT_BUTTON_TEXTS.REMOVE,
  styles: '',
  disabled: false,
}

RemoveFromCart.propTypes = {
  item: PropTypes.object.isRequired,
  text: PropTypes.string,
  styles: PropTypes.string,
  disabled: PropTypes.bool,
  removeFromCart: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(null, mapDispatchToProps)(RemoveFromCart);
