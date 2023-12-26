import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPost } from "../../models";
import { Page404 } from "../404/Page404";
import { ReturnButton } from "../../components/ReturnButton";

export const PostPage = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        if ( Object.keys(data).length ) {
          setPost(data.post);
        } else {
          setIsNotFound(true);
        }
      });
  }, []);

  const handleGoBack = () => {
    navigate("/");
  }
  const handleGoMain = () => {
    navigate("/", {replace: true, state: `/posts/${id}`});
  }
  const handleGoEdit = () => {
    navigate(`/posts/${id}/edit`);
  }

  const handleRemove = () => {
    fetch(`http://localhost:7070/posts/${id}`, {
      method: "DELETE"
    }).then(response => {
      if ( response.status === 204 ) {
        navigate("/", {replace: true, state: `/posts/${id}`});
      } else {
        alert('Ошибка удаления!!!');
      }
    })
  }

  return (
    <>
      <ReturnButton handleClick={isNotFound ? handleGoMain : handleGoBack}>
        {isNotFound ? "На главную" : "Назад" }
      </ReturnButton>
      {isNotFound && <Page404 />}
      {post && (
        <div className="post post--detail">
          <h1 className="post__title page__title">Пост #{id}</h1>          
          <div className="post__author">{post.author || "Гость"}</div>
          <div className="post__date">{new Date(post.created).toLocaleString()}</div>
          <div className="post__content">{post.content}</div>
          <div className="post__actions">
            <button className="btn post__edit" onClick={handleGoEdit}>Редактировать</button>
            <button className="btn post__remove" onClick={handleRemove}>Удалить</button>
          </div>
        </div>
      )}
    </>
  )
}