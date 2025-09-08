import { useEffect, useState } from "react";

interface IFetchingFunc<P, T> {
  (params?: P): Promise<T>;
}

interface IUseFetchResult<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T, P>(
  fetchingFunc: IFetchingFunc<P, T>,
  params?: P
): IUseFetchResult<T> => {
  const [data, setData] = useState<T | null | undefined>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetchingFunc(params);
        setData(response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchingFunc, stringParams]);

  return { data, isLoading, error };
};
