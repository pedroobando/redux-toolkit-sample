import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { decrement, increment, incrementBy } from './store/slices/counter';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const { counter } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Contador es: {counter}</p>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => {
            dispatch(incrementBy(2));
          }}
        >
          IncrementBy 2
        </button>
      </div>
    </div>
  );
}

export default App;
