import { useEffect, useState } from "react";
import { TUser, TUserListItem } from "../Types";

export default function Details({info}: {info: TUserListItem|null}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<TUser|null>(null);

  useEffect(() => {
    if ( info !== null ) {
      const fetchData = async (url: string) => {
        const response = await fetch(url);
    
        return await response.json();
      }
  
      setLoading(true);
      fetchData(import.meta.env.VITE_SOURCE_URL + `${info.id}.json`)
        .then(data => {
            setLoading(false);
            setUser(data);          
        });
    }
  }, [info]);

  return (
    <div className="details">
      {loading && <p>Loading...</p>}
      {user !== null && !loading && <>
        <img src={user.avatar} alt="" />
        <div className="details__name">{user.name}</div>
        <div className="details__work">
          <p>{user.details.city}</p>
          <p>{user.details.company}</p>
          <p>{user.details.position}</p>
        </div>
      </>}
    </div>
  )
}