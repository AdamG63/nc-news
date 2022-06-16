import { useState, useEffect } from "react";
import CommentsPlaycard from "./CommentsPlaycard";
import { useParams } from "react-router-dom";
import { getComment } from "./Utils/Axios";
import AddComment from "./AddComment";

const Comments = ({ newComment, selectUser }) => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getComment(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id, newComment]);

  return (
    <div className="Comments">
      <ul>
        {comments.map((comment) => {
          return (
            <CommentsPlaycard
              comment={comment}
              key={comment.comment_id}
              selectUser={selectUser}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
