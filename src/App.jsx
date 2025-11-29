
import './App.css'
import { increament, decreament, reset } from "./store/Counterslice";
import { useDispatch, useSelector } from "react-redux";

function App() {



  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-pink-700 justify-center flex shadow-md">
        <h1> Count: {count} </h1>
        <button onClick={() => dispatch(increament())}> + </button>
        <button onClick={() => dispatch(decreament())}>  -</button>
        <button onClick={() => dispatch(reset())}> reset </button>
      </div>


    </>
  )
}

export default App
