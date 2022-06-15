import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Item from "./Utils/GridCss";
import TopicsPlaycard from "./TopicsPlaycard";
import { getTopics } from "./Utils/Axios";
import ClipLoader from "react-spinners/ClipLoader";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics()
      .then((response) => {
        return response;
      })
      .then((body) => {
        setTopics(body);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="TopicsList">
      {isLoading ? (
        <ClipLoader color={"#36D7B7"} loading={isLoading} size={150} />
      ) : (
        <Grid container spacing={2}>
          {topics.map((topic) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={topic.slug}>
                <Item>
                  <TopicsPlaycard topic={topic} />
                </Item>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};
export default Topics;
