import { useState, useEffect } from "react";
import { IPost } from "../../models";
import { PostItem } from "../Post/PostItem";

export function HomePage() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch(`http://localhost:7070/posts`)
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }, []);

  return (
    <div className="posts">
      {posts && (
        posts.map(post => <PostItem post={post} key={post.id} />)
      )}
    </div>
  )
}