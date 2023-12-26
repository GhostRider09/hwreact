import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import { IPost } from "../../models";
import { useEffect, useState } from "react";
import { ReturnButton } from "../../components/ReturnButton";

export function EditPage() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [post, setPost] = useState<IPost|null>(null);

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        if ( Object.keys(data).length ) {
          setPost(data.post);
        }
      });
  }, []);
  
  async function editNote(post: Omit<IPost, "id">) {
    return await fetch(`http://localhost:7070/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(post)
    }).then(() => {
      navigate(`/posts/${id}`, {replace: true, state: `/posts/${id}/edit`});
    })
  }

  let handleBackToPosts = () => {
    navigate(-1);
  }

  return (
    <>
      <ReturnButton handleClick={handleBackToPosts} />
      <div className="page__content">
        <h1 className="page__title">Edit post #{id}</h1>
        {post && <Form post={post} addNoteHandler={editNote} />}
      </div>
    </>
  )
}