const CommentsPlaycard = ({ comment, selectUser }) => {
  return (
    <p className="CommentsPlaycard">
      <img src={selectUser.avatar_url} alt={selectUser.name} width="40px"></img>
      <span style={{ fontWeight: "bold" }}>{comment.author}</span>
      <br></br> {comment.body}
      <br></br>
      <span style={{ fontWeight: "bold" }}>Votes - {comment.votes}</span>
    </p>
  );
};

export default CommentsPlaycard;
