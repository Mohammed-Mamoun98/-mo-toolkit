import React from "react";
import { Counter } from "@mo-toolkit/counter";
import "./App.css";
import { usePromise } from "@mo-toolkit/hooks";

const wait = (ms = 2000) =>
  new Promise((res) => {
    setTimeout(() => {
      res(0);
    }, ms);
  });

const testPromise = async () => {
  await wait();
  return {
    name: "",
    age: 26,
  };
};

type Response = Awaited<ReturnType<typeof testPromise>>;

function App() {
  const [getSample, sample, loadingSample, error] =
    usePromise<Response>(testPromise);
  return (
    <>
      <p>Main App</p>
      <Counter />
      <br />
      <h3>USE PROMISE HOOK</h3>
      <button onClick={getSample}>Call the hook</button>
      <h3>
        {JSON.stringify({
          sample,
          loadingSample,
          error,
        })}
      </h3>
    </>
  );
}

export default App;
