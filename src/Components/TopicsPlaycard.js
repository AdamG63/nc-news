import { Link } from "react-router-dom";

const TopicsPlaycard = ({ topic }) => {
  return (
    <li className="ArticlesPlaycard">
      <Link to={`/topics/${topic.slug}`}>
        <h3>{topic.slug}</h3>
      </Link>
    </li>
  );
};

export default TopicsPlaycard;
