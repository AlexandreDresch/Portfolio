/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  act: (...args: any[]) => Promise<T | void>;
}

/*
  Custom hook for handling asynchronous operations.

  Parameters:
    - handler: A function that returns a promise. This function will be called when `act` is invoked.
    - immediate (optional): A boolean indicating whether to immediately execute the `handler` function upon hook initialization. Default is `true`.

  Returns:
    - An object containing:
      - data: The result of the asynchronous operation. It will be `null` initially and updated once the operation is complete.
      - loading: A boolean indicating whether the asynchronous operation is in progress.
      - error: Any error that occurred during the asynchronous operation. It will be `null` if no error occurred.
      - act: A function that triggers the asynchronous operation. It can be called with optional arguments passed to the `handler` function.
*/
export default function useAsync<T>(
  handler: (...args: any[]) => Promise<T>,
  immediate = true
): AsyncState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<any>(null);

  const act = useCallback(async (...args: any[]): Promise<T | void> => {
    setLoading(true);
    setError(null);

    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);
      return data;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  }, [handler]);

  useEffect(() => {
    if (immediate) {
      act();
    }
  }, [act, immediate]);

  return {
    data,
    loading,
    error,
    act,
  };
}