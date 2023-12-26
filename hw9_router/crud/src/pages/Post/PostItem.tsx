import { Link } from "react-router-dom"
import { IPost } from "../../models"

export const PostItem = ({post}: {post: IPost}) => {
  const title = `#${post.id} ${(post.author || "Гость")}`;
  return (
    <div className="post">          
      <div className="post__author">
        <Link to={`/posts/${post.id}`}>{title}</Link>
      </div>
      <div className="post__date">{new Date(post.created).toLocaleString()}</div>
      <div className="post__content">{post.content.substring(0, 10) + "..."}</div>
    </div>
  )
}