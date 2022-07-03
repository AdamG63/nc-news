import { useState, useEffect } from "react";
import CommentsPlaycard from "./CommentsPlaycard";
import { useParams } from "react-router-dom";
import { getComment } from "./Utils/Axios";
import Divider from "@mui/material/Divider";

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
            <li key={comment.comment_id}>
              <CommentsPlaycard
                comment={comment}
                selectUser={selectUser}
                setDeleted={setDeleted}
              />
              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
