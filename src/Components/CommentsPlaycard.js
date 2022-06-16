import { deleteComment } from "./Utils/Axios";

const CommentsPlaycard = ({ comment, selectUser, setDeleted }) => {
  const HandleDelete = (e) => {
    e.preventDefault();
    deleteComment(comment.comment_id).then((response) => {
      setDeleted(response);
      alert("Your comment has been deleted");
    });
  };

  return (
    <p className="CommentsPlaycard">
      <img src={selectUser.avatar_url} alt={selectUser.name} width="40px"></img>
      <span style={{ fontWeight: "bold" }}>{comment.author}</span>
      <br></br> {comment.body}
      <br></br>
      <span style={{ fontWeight: "bold" }}>Votes - {comment.votes}</span>
      <br></br>
      <button onClick={HandleDelete}>Delete</button>
    </p>
  );
};

export default CommentsPlaycard;
