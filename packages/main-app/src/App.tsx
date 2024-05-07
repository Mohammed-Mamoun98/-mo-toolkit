import React from "react";
import "./App.css";
import { usePromise, setPromiseGlobalConfig } from "@mo-toolkit/hooks";

const wait = (ms = 2000) =>
  new Promise((res) => {
    setTimeout(() => {
      res(0);
    }, ms);
  });

const testPromise = async () => {
  await wait();

  throw new Error("TEST ERROR");
  return {
    name: "",
    age: 26,
  };
};

setPromiseGlobalConfig({ onError: (err) => alert(err) });

type Response = Awaited<ReturnType<typeof testPromise>>;

function App() {
  const [getSample, sample, loadingSample, error] = usePromise<Response>(
    testPromise,
    { showError: true }
  );
  return (
    <>
      <p>Main App</p>
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
