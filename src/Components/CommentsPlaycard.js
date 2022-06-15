const CommentsPlaycard = ({ comment }) => {
  return (
    <li className="CommentsPlaycard">
      <span style={{ fontWeight: "bold" }}>{comment.author}</span> -
      {comment.body}
      <span style={{ fontWeight: "bold" }}>Votes - {comment.votes}</span>
    </li>
  );
};

export default CommentsPlaycard;
