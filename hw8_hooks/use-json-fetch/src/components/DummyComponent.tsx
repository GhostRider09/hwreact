import { useJsonFetch } from "../hooks/useJsonFetch";

export default function DummyComponent({title, url}: {
  title: string
  url: string
}) {
  const [data, loading, error] = useJsonFetch(url);

  return (
    <>
      <h1>{title}</h1>
      {loading && <p>Loading...</p>}
      {!loading && error && <p style={{color: "#f00"}}>{error}</p>}
      <p style={{color: "#0c0"}}>{
        !error 
          && !loading
          && data 
          && Object.keys(data).length > 0 
          && JSON.stringify(data)
      }</p>
    </>
  )
}