import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./Utils/Axios";
import ClipLoader from "react-spinners/ClipLoader";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((response) => {
        return response;
      })
      .then((body) => {
        setSingleArticle(body.data.article);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="SingleItem">
      {isLoading ? (
        <ClipLoader color={"#36D7B7"} loading={isLoading} size={150} />
      ) : (
        <>
          <h2>{singleArticle.title}</h2>
          <h4>
            Author: {singleArticle.author} Date:
            {singleArticle.created_at}
          </h4>
          <p>{singleArticle.body}</p>
        </>
      )}
    </div>
  );
};

export default SingleArticle;
