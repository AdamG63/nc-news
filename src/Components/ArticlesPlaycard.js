import { Link } from "react-router-dom";

const ArticlesPlaycard = ({ article }) => {
  console.log(article);
  return (
    <li className="ArticlesPlaycard">
      <Link
        to={`/articles/${article.article_id}`}
        style={{ textDecoration: "none" }}
      >
        <h3>{article.title}</h3>
      </Link>
    </li>
  );
};

export default ArticlesPlaycard;
