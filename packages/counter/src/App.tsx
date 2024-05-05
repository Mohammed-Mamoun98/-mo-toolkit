import { useState } from "react";

export default function Counter () {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <h2 onClick={() => setCounter((c) => c + 1)}>Counter:</h2> {counter}
    </div>
  );
}
