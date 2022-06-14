import { Link } from "react-router-dom";

const ArticlesPlaycard = ({ article }) => {
  return (
    <li className="ArticlesPlaycard">
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
    </li>
  );
};

export default ArticlesPlaycard;
