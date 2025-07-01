import { useEffect, useState } from 'react';

type FetchFunction<T> = () => Promise<T>;

export function useFetch<T>(fetcher: FetchFunction<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetcher();
        setData(response);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [fetcher]);

  return { data, loading, error };
}
