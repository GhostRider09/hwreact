import { useEffect, useState } from "react";

type UseJsonFetchResult = [
  data: object,
  loading: boolean,
  error: string
]

export const useJsonFetch = (url:string, opts?: object): UseJsonFetchResult => {
  const [data, setData] = useState<Object>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async (url: string) => {
      setLoading(true);
      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        
        setData(data);
        setError("");
      } catch (e) {
        setError(e instanceof Error ? e.toString() : "Invalid request");
      } finally { 
        setLoading(false); 
      }
    }

    fetchData(url);
  }, [])
  

  return [data, loading, error];
}