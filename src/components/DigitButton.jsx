import { ACTIONS } from '../App'
import PropTypes from 'prop-types'

export default function DigitButton ({ dispatch, digit }) {
    return (
        <button onClick={ () => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }})}>
            { digit }
        </button>
    )
}

DigitButton.propTypes = {
    digit: PropTypes.string.isRequired
}