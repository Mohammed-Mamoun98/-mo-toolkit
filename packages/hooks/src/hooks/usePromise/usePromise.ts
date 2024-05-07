/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { IUsePromiseGlobalConf } from "./globalConf";

type STATUS_TYPES = "success" | "idle" | "error";
interface IBaseConfig {
  initReq?: boolean;
  defaultRes?: any;
  showError?: boolean;
  cachedResponse?: boolean;
}

interface IHookState<Response = any> {
  response?: Response;
  loading?: boolean;
  error?: string;
  paramsArray?: any[];
  requestRetries?: number;
  executionTime?: number;
  hadRetried?: boolean;
  status: STATUS_TYPES;
}

const windowObj = window as any;

export const usePromise = <ResponseType = any, TParams extends any[] = any>(
  promiseFunction: (..._params: any[]) => Promise<ResponseType>,
  baseConfig: IBaseConfig = {}
): [
  (...params: TParams) => Promise<ResponseType>,
  ResponseType | undefined,
  boolean,
  string,
  any,
  STATUS_TYPES,
  () => void
] => {
  const defaultHookState: IHookState<ResponseType> = {
    response: baseConfig?.defaultRes,
    loading: false || baseConfig?.initReq,
    error: "",
    paramsArray: [],
    requestRetries: 0,
    executionTime: Date.now(),
    hadRetried: false,
    status: "idle",
  };

  const [hookState, setHookState] =
    useState<IHookState<ResponseType>>(defaultHookState);

  const updateHookState = (newState = {}) => {
    setHookState((prevState) => {
      return {
        ...prevState,
        ...newState,
      };
    });
  };

  const resetHookState = () => {
    setHookState(defaultHookState);
  };

  const updateResponse = (res: any) => updateHookState({ response: res });

  const executePromise = (...params: any[]): Promise<ResponseType> => {
    const usePromiseConfig: IUsePromiseGlobalConf | undefined =
      windowObj.usePromiseConf;

    const appendedResponse = baseConfig.cachedResponse
      ? { response: hookState.response }
      : { response: baseConfig.defaultRes };

    updateHookState({
      loading: true,
      paramsArray: [...params],
      status: "idle",
      error: "",
      ...appendedResponse,
    });

    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
      if (!promiseFunction) return;
      try {
        const response = await promiseFunction(...(params as []));
        updateHookState({
          response,
          loading: false,
          status: "success",
        });
        resolve(response);
      } catch (error: any) {
        const errorIsString = typeof error === "string";
        const errorMessage = errorIsString ? error : error?.message;

        if (baseConfig.showError && errorMessage && usePromiseConfig?.onError)
          usePromiseConfig?.onError(errorMessage);

        updateHookState({
          error: errorMessage,
          loading: false,
          status: "error",
        });
        // reject(error);
      }
    });
  };

  useEffect(() => {
    if (baseConfig.initReq) executePromise();
  }, []);

  const { response, loading, error, status } = hookState;
  return [
    executePromise,
    response,
    !!loading,
    error || "",
    updateResponse,
    status,
    resetHookState,
  ];
};
