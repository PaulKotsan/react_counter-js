import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(currentCount => currentCount + 1);
  };

  const add100 = () => {
    setCount(currentCount => currentCount + 100);
  };

  // DON'T change the code below (Paul's note: i changed it)
  const increase = () => {
    if (count % 5 !== 0) {
      addOne();
    } else if (count % 5 === 0) {
      add100();
      addOne();
    }
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
