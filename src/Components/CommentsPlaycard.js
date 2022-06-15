const CommentsPlaycard = ({ comment }) => {
  return (
    <p className="CommentsPlaycard">
      <span style={{ fontWeight: "bold" }}>{comment.author}</span> -
      {comment.body}
      <span style={{ fontWeight: "bold" }}>Votes - {comment.votes}</span>
    </p>
  );
};

export default CommentsPlaycard;
