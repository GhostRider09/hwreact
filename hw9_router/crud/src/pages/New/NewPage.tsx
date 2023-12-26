import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import { IPost } from "../../models";
import { ReturnButton } from "../../components/ReturnButton";

export function NewPage() {
  const navigate = useNavigate();
  
  async function addNote(post: Omit<IPost, "id">) {
    return await fetch("http://localhost:7070/posts", {
      method: "POST",
      body: JSON.stringify(post)
    }).then(() => {
      navigate(-1);
    })
  }

  let handleBackToPosts = () => {
    navigate(-1);
  }

  return (
    <>
      <ReturnButton handleClick={handleBackToPosts} />
      <div className="page__content">
        <h1 className="page-title">Add post</h1>
        <Form addNoteHandler={addNote} />
      </div>
    </>
  )
}