import React from 'react';
import { ACTIONS } from '../App';
import PropTypes from 'prop-types';

/**
 * Digit Button Function Component
 * @param { Object }    DigitButton
 * @param { Function }  DigitButton.dispatch - dispatch function of reducer
 * @param { string }    DigitButton.digit - digit value
 * @param { string }    refButton - reference the button with App  
 * @return { string }   The HTML button
 */
const DigitButton = React.forwardRef(({ dispatch, digit }, refButton) => (
  <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })} ref={refButton}>
    {digit}
  </button>
));

// Rules to props
DigitButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  digit: PropTypes.string.isRequired,
};

export default DigitButton;
