import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increaseQty } from '../../reducer';
import Button from '../../elements/Button';
import { DEFAULT_BUTTON_TEXTS } from '../../constants';

const IncreaseQty = (props) => {
  const { styles, text, itemId, increaseQty } = props;
  return(
    <Button 
      styles={styles} 
      className='rrshoppingcart-qty-btn rrshoppingcart-inc'
      onClick={ () => increaseQty(itemId) }>
        { text || DEFAULT_BUTTON_TEXTS.INC }
    </Button>
  )
}

IncreaseQty.propTypes = {
  itemId: PropTypes.string.isRequired,
  text: PropTypes.string,
  styles: PropTypes.string,
  increaseQty: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  increaseQty,
};

export default connect(null, mapDispatchToProps)(IncreaseQty);
