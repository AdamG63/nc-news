import { Link } from "react-router-dom";

const SortedTopicsPlaycard = ({ article }) => {
  return (
    <li className="SortedArticlesPlaycard">
      <Link
        to={`/articles/${article.article_id}`}
        style={{ textDecoration: "none" }}
      >
        <h3>{article.title}</h3>
      </Link>
    </li>
  );
};

export default SortedTopicsPlaycard;
