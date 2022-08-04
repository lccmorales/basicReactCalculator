import { ACTIONS } from '../App';
import PropTypes from 'prop-types';

/**
 * Function Component for Digit Buttons
 * @param { Object }  DigitButton - button to add digit value to use
 * @param { Function }  DigitButton.dispatch - dispatch function of reducer
 * @param { string }  DigitButton.digit - digit value
 * @return { string } The HTML button
 */
const DigitButton = ({ dispatch, digit }) => (
  <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
    {digit}
  </button>
);

// Rules to props
DigitButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  digit: PropTypes.string.isRequired,
};

export default DigitButton;
