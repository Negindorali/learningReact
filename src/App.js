import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount} from "./features/counter/counter";

function App() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">

          <button
              aria-label="Increment value"
              className="bg-rose-500 my-4 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => dispatch(increment())}
          >
              Increment
          </button>
          <span>{count}</span>
          <button
              aria-label="Decrement value"
              className="bg-blue-500 my-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => dispatch(decrement())}
          >
              Decrement
          </button>
      </header>
    </div>
  );
}

export default App;
