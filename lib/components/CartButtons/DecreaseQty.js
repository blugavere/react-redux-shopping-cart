import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decreaseQty } from '../../reducer';
import Button from '../../elements/Button';
import { DEFAULT_BUTTON_TEXTS } from '../../constants';

const DecreaseQty = (props) => {
  const { styles, text, itemId, decreaseQty } = props;
  return(
    <Button 
      styles={styles}
      className='rrshoppingcart--button-qty rrshoppingcart--button-dec'
      onClick={ () => decreaseQty(itemId) }>
        { text || DEFAULT_BUTTON_TEXTS.DEC }
    </Button>
  )
}

DecreaseQty.propTypes = {
  itemId: PropTypes.string.isRequired,
  text: PropTypes.string,
  styles: PropTypes.string,
  decreaseQty: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  decreaseQty,
};

export default connect(null, mapDispatchToProps)(DecreaseQty);
