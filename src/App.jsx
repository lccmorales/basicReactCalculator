import { useReducer, useEffect, useRef, useState } from 'react';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';
import KeyList from './components/KeyList';
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
 * @param { * } state
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

  const [showKeyList, setShowKeyList] = useState(false);

  /**
   * useRef Variables
   */
  const ref = useRef(null);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  const ref0 = useRef();
  const refDot = useRef();
  const refAddition = useRef();
  const refSubtraction = useRef();
  const refMultiplication = useRef();
  const refDivision = useRef();
  const refDel = useRef();
  const refAC = useRef();
  const refEVAL = useRef();
  
  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleKeyDown = (event) => {
    // console.log('User pressed: ', event.key);
    switch (event.key) {
      case '1':
        ref1.current.click();
        break;
      case '2':
        ref2.current.click();
        break;
      case '3':
        ref3.current.click();
        break;
      case '4':
        ref4.current.click();
        break;
      case '5':
        ref5.current.click();
        break;
      case '6':
        ref6.current.click();
        break;
      case '7':
        ref7.current.click();
        break;
      case '8':
        ref8.current.click();
        break;
      case '9':
        ref9.current.click();
        break;
      case '0':
        ref0.current.click();
        break;
      case '.':
        refDot.current.click();
        break;
      case '+':
        refAddition.current.click();
        break;
      case '-':
        refSubtraction.current.click();
        break;
      case '*':
        refMultiplication.current.click();
        break;
      case '/':
        refDivision.current.click();
        break;
      case 'Enter':
        refEVAL.current.click();
        break;
      case 'Delete':
        refDel.current.click();
        break;
      case 'Escape':
        refAC.current.click();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className='calculatorGrid' ref={ref} tabIndex={-1} onKeyDown={handleKeyDown}>
        <div className='output'>
          <div className='previousOperand'>
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className='currentOperand'>{formatOperand(currentOperand)}</div>
        </div>
        <button className='span-two' onClick={() => dispatch({ type: ACTIONS.CLEAR })} ref={refAC} data-title='Press Esc'>
          AC
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })} ref={refDel} data-title='Press Del'>
          DEL
        </button>
        <OperationButton operation='÷' dispatch={dispatch} ref={refDivision}/>
        <DigitButton digit='1' dispatch={dispatch} ref={ref1} />
        <DigitButton digit='2' dispatch={dispatch} ref={ref2} />
        <DigitButton digit='3' dispatch={dispatch} ref={ref3}/>
        <OperationButton operation='*' dispatch={dispatch} ref={refMultiplication}/>
        <DigitButton digit='4' dispatch={dispatch} ref={ref4}/>
        <DigitButton digit='5' dispatch={dispatch} ref={ref5}/>
        <DigitButton digit='6' dispatch={dispatch} ref={ref6}/>
        <OperationButton operation='+' dispatch={dispatch} ref={refAddition}/>
        <DigitButton digit='7' dispatch={dispatch} ref={ref7}/>
        <DigitButton digit='8' dispatch={dispatch} ref={ref8}/>
        <DigitButton digit='9' dispatch={dispatch} ref={ref9}/>
        <OperationButton operation='-' dispatch={dispatch} ref={refSubtraction}/>
        <DigitButton digit='.' dispatch={dispatch} ref={refDot}/>
        <DigitButton digit='0' dispatch={dispatch} ref={ref0}/>
        <button className='span-two' onClick={() => dispatch({ type: ACTIONS.EVALUATE })} ref={refEVAL}
          data-title='Press Enter'
        >
          =
        </button>
      </div>
      <div className="notes" onClick={ () => setShowKeyList(!showKeyList) } >
        <span style={{textAlign: 'center'}}>Using your Keyboard</span>
        { showKeyList && <KeyList />} 
      </div>
    </>
  );
}

export default App;
