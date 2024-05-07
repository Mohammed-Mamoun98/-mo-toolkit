import { useDebounce } from "./hooks/useDebounce/useDebounce";
import { setPromiseGlobalConfig } from "./hooks/usePromise/globalConf";
import { usePromise } from "./hooks/usePromise/usePromise";

const testPromise = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ value: 1 });
    }, 1000);
  });
};

setPromiseGlobalConfig({
  onError: (err) => console.error(err),
  onSuccess: () => {},
});

type Response = Awaited<ReturnType<typeof testPromise>>;
export default function App() {
  const [getSample, sample, loadingSample, error] =
    usePromise<Response>(testPromise);
  const depouncedValue = useDebounce(sample || "t", 1000);
  return (
    <div>
      <h3>USE PROMISE HOOK</h3>
      <button onClick={getSample}>Call the hook</button>
      <h3>
        {JSON.stringify({
          sample,
          loadingSample,
          error,
          depouncedValue,
        })}
      </h3>
    </div>
  );
}
