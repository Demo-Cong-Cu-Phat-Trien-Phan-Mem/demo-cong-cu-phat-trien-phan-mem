import { useState } from "react";
import CounterApp from "./component/CounterApp";

function App() {
  const [show, setShow] = useState(false);

  const showCounterApp = () => {
    setShow(!show);
  };

  console.log(show);

  return (
    <div>
      <button onClick={(e) => {
        alert('Hello World');
      }}>Show alert</button>
      <button onClick={showCounterApp}>Show App</button>
<h3>Hello World</h3>
      {show ? <CounterApp /> : <h3>Counter app not display!</h3>}
    </div>
  );
}

export default App;

// JSX => Javascript XML
// JSX => Sử dụng thay thế react.CreateElement => thân thiện hơn với dev FE
// JSX => Có thể nhúng code JS vào, biến, biểu thức, hàm ,...
