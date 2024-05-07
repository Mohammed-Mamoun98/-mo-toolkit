/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUsePromiseGlobalConf {
  onSuccess: (res: unknown) => void;
  onError: (error: string) => void;
}

const windowObj = window as any;

// Usually used for setting notification
export const setPromiseGlobalConfig = ({
  onSuccess,
  onError,
}: IUsePromiseGlobalConf) => {
  windowObj.usePromiseConf = {
    onSuccess,
    onError,
  };
};
