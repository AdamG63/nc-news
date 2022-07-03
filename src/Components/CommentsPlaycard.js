import { deleteComment } from "./Utils/Axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Votes from "./Votes";

const CommentsPlaycard = ({ comment, selectUser, setDeleted }) => {
  const HandleDelete = (e) => {
    e.preventDefault();
    deleteComment(comment.comment_id).then((response) => {
      setDeleted(response);
      alert("Your comment has been deleted");
    });
  };

  return (
    <div className="CommentsPlaycard">
      <img src={selectUser.avatar_url} alt={selectUser.name} width="40px"></img>
      <span style={{ fontWeight: "bold" }}>{comment.author}</span>
      <br></br> {comment.body}
      <br></br>
      <span style={{ fontWeight: "bold" }}>Votes {comment.votes}</span>
      <br></br>
      {comment.author !== selectUser.username ? (
        ""
      ) : (
        <button
          onClick={HandleDelete}
          disabled={comment.author !== selectUser.username}
        >
          <DeleteIcon />
        </button>
      )}
    </div>
  );
};

export default CommentsPlaycard;
