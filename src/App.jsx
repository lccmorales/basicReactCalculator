import { useReducer, useEffect, useRef } from 'react';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';
import './App.css';

/**
 * @const { actions } - like a name there are actions
 */
export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
};

/**
 * Reducer Function
 * @param {*} state
 * @param { Object }  Payload
 * @param { string }  Payload.type - type value
 * @param { Object }  Payload.payload - new value for the state
 * @returns
 */
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }

      if (payload.digit === '0' && state.currentOperand === '0') return state;
      if (payload.digit === '.' && state.currentOperand.includes('.')) return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) return state;

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      )
        return state;

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
}

/**
 * Performs the operation
 * @param { Object }  objectToEvaluate
 * @param { string }  objectToEvaluate.currentOperand - currentOperand string
 * @param { string }  objectToEvaluate.previousOperand - previousOperand string
 * @param { string }  objectToEvaluate.operation - operation value
 * @return { string } result
 * @returns
 */
function evaluate({ currentOperand, previousOperand, operation }) {
  let computation = '';
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return '';
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '÷':
      computation = prev / current;
      break;
  }
  return computation.toString();
}

/**
 * Format operand to show
 * @return { string }
 */
const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', { maximumFractionDigits: 0 });
function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split('.');
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

/**
 ** Basic React Calculator - Main HTML structure
 * @return { string } The HTML App
 */
function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  /**
   * Reference Variable
   */
  const ref = useRef(null);
  const refOne = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleKeyDown = (event) => {
    console.log('User pressed: ', event.key);
    switch (event.key) {
      case '1':
        refOne.current.click();
        break;
      case '2':
      
        break;
      case '3':

        break;
      case '4':
      
        break;
      case '5':

        break;
      case '6':
      
        break;
      case '7':

        break;
      case '8':
      
        break;
      case '9':

        break;
      case '0':
      
        break;
      case '1':

        break;
      case '2':
      
        break;
      case '+':

        break;
      case '-':

        break;
      case '*':
        break;
      case '/':

        break;
      case 'Enter':

        break;
      case 'Delete':

        break;
      case 'Escape':

        break;
      default:
        break;
    }
  };

  return (
    <div className='calculatorGrid' ref={ref} tabIndex={-1} onKeyDown={handleKeyDown}>
      <div className='output'>
        <div className='previousOperand'>
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className='currentOperand'>{formatOperand(currentOperand)}</div>
      </div>
      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
        AC
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
      <OperationButton operation='÷' dispatch={dispatch} />
      <DigitButton digit='1' dispatch={dispatch} innerRef={refOne}/>
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />
      <OperationButton operation='*' dispatch={dispatch} />
      <DigitButton digit='4' dispatch={dispatch} />
      <DigitButton digit='5' dispatch={dispatch} />
      <DigitButton digit='6' dispatch={dispatch} />
      <OperationButton operation='+' dispatch={dispatch} />
      <DigitButton digit='7' dispatch={dispatch} />
      <DigitButton digit='8' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />
      <OperationButton operation='-' dispatch={dispatch} />
      <DigitButton digit='.' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />
      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>
        =
      </button>
    </div>
  );
}

export default App;
