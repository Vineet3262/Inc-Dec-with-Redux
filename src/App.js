import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';

function App() {
  const counter = useSelector(state => state.incDecNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React & Redux</h1>
      <h3>increment Decrement using Redux</h3>
      <div className='quantity'>
        <a className='quantity_Minus' title='Decrement' onClick={() => dispatch(decNumber(3))}>- </a>
        <input name='quantity' type="text" className="quantity_input" value={counter} />
        <a className='quantity_Plus' title='increment' onClick={() => dispatch(incNumber(5))}>+</a>
      </div>
    </div>
  );
}

export default App;
