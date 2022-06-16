import { useState, useEffect } from "react";
import CommentsPlaycard from "./CommentsPlaycard";
import { useParams } from "react-router-dom";
import { deleteComment, getComment } from "./Utils/Axios";

const Comments = ({ newComment, selectUser }) => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [deleted, setDeleted] = useState({});

  useEffect(() => {
    getComment(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id, newComment, deleted]);

  return (
    <div className="Comments">
      <ul>
        {comments.map((comment) => {
          return (
            <CommentsPlaycard
              comment={comment}
              key={comment.comment_id}
              selectUser={selectUser}
              setDeleted={setDeleted}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
