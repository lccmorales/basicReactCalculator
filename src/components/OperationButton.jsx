import { ACTIONS } from '../App';
import PropTypes from 'prop-types';

/**
 * Operation Button Function Component
 * @param { Object }    OperationButton - button to add operation to use
 * @param { Function }  OperationButton.dispatch - dispatch function of reducer
 * @param { string }    OperationButton.operation - operation value
 * @return { string }   The HTML button
 */
const OperationButton = ({ dispatch, operation }) => (
  <button
    onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
  >
    {operation}
  </button>
);

// Rules to props
OperationButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  operation: PropTypes.string.isRequired,
};

export default OperationButton;
