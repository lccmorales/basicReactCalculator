import { ACTIONS } from '../App';
import PropTypes from 'prop-types';

export const OperationButton = ({ dispatch, operation }) => {
  return (
    <button onClick={ () => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation }})}>
      { operation }
    </button>
  )
};

OperationButton.propTypes = {
  operation: PropTypes.string.isRequired
};