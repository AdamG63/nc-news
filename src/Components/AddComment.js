import { useState } from "react";
import { postComment } from "./Utils/Axios";
import { useParams } from "react-router-dom";
import { confetti } from "party-js";

const AddComment = ({ selectUser, setNewComment }) => {
  const { article_id } = useParams();

  const [addComment, setAddComment] = useState("");
  const [isAuthor, setIsAuthor] = useState(selectUser.username);

  const HandleChange = (e) => {
    setAddComment(e.target.value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    confetti(e.target);
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
          <h1 className="SearchBox">
            <input
              type="text"
              placeholder="Add comment"
              onChange={HandleChange}
              value={addComment}
              required
              className="search-bar"
            />
          </h1>
        </label>
      </form>
    </div>
  );
};

export default AddComment;
