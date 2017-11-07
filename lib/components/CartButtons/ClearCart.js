import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearCart } from '../../reducer';
import Button from '../../elements/Button';
import { DEFAULT_BUTTON_TEXTS } from '../../constants';

const ClearCart = (props) => {
  const { styles, text, clearCart } = props;
  return(
    <Button 
      styles={styles}
      className='rrshoppingcart-clear-btn'
      onClick={ () => clearCart() }>
        { text || DEFAULT_BUTTON_TEXTS.CLEAR }
    </Button>
  )
}

ClearCart.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.string,
  clearCart: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  clearCart,
};

export default connect(null, mapDispatchToProps)(ClearCart);
