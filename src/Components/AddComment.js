import { useState, useEffect } from "react";
import { postComment } from "./Utils/Axios";
import { useParams } from "react-router-dom";

const AddComment = ({ selectUser, setNewComment }) => {
  const { article_id } = useParams();

  const [addComment, setAddComment] = useState("");
  const [isAuthor, setIsAuthor] = useState(selectUser.username);

  const HandleChange = (e) => {
    setAddComment(e.target.value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, addComment, isAuthor).then((response) => {
      alert("Comment has been posted");
      setNewComment(response);
      setAddComment("");
    });
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={HandleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Add comment"
            onChange={HandleChange}
            value={addComment}
            required
          />

          <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
};

export default AddComment;
