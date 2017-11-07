import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CartTotal = (props) => {
  const { total, currency } = props;
  return(
    <span>
      <span className="rrshoppingcart-grandtotal-amount">{ total }</span>
      <span className="rrshoppingcart-grandtotal-currency">{ currency }</span>
    </span>
  );
}

CartTotal.defaultProps = {
  total: 0,
  currency: '$'
} 

CartTotal.propTypes = {
  total: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}

const mapStateToProps = (store) => ({
  total: store.cart.total,
});

export default connect(mapStateToProps, {})(CartTotal);