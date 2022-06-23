import { useState, useEffect } from "react";
import Item from "./Utils/GridCss";
import Grid from "@mui/material/Grid";
import SortedTopicsPlaycard from "./SortedTopicPlaycard";
import { useParams } from "react-router-dom";
import { getArticleBytopic } from "./Utils/Axios";
import ClipLoader from "react-spinners/ClipLoader";
import { Menu } from "@mui/material";
import MenuPopupState from "./DropDown";
import { getArticles } from "./Utils/Axios";

const TopicsByTopic = ({ setSorted, setSortByCat, sorted, sortByCat }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [sortedArticles, setSortedArticles] = useState([]);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    getArticleBytopic(slug)
      .then((response) => {
        setSortedArticles(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, [slug]);

  if (error) {
    return <p className="Error">Oh no, an error occured!</p>;
  }

  return (
    <div className="TopicsByTopic">
      {isLoading ? (
        <ClipLoader color={"#36D7B7"} loading={isLoading} size={150} />
      ) : (
        <>
          <MenuPopupState setSorted={setSorted} setSortByCat={setSortByCat} />
          <Grid container spacing={2}>
            {sortedArticles.map((article) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={article.article_id}>
                  <Item>
                    <SortedTopicsPlaycard article={article} />
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </div>
  );
};

export default TopicsByTopic;
