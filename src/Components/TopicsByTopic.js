import { useState, useEffect } from "react";
import Item from "./Utils/GridCss";
import Grid from "@mui/material/Grid";
import SortedTopicsPlaycard from "./SortedTopicPlaycard";
import { useParams } from "react-router-dom";
import { getArticleBytopic } from "./Utils/Axios";

const TopicsByTopic = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sortedArticles, setSortedArticles] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    getArticleBytopic(slug).then((response) => {
      setSortedArticles(response);
    });
  }, [slug]);

  return (
    <div className="TopicsByTopic">
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
    </div>
  );
};

export default TopicsByTopic;
