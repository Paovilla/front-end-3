import { useState } from "react";
import Cabecera from '../src/components/Cabecera';
import Listado from '../src/components/Listado';

function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    const countUpdated = count + 1;
    setCount(countUpdated)
  }

  return (
    <div className="App">
      <Cabecera count={count} />
      <Listado handleCount={handleCount} />
    </div>
  );
}

export default App;
