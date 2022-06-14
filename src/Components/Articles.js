import { useState, useEffect } from "react";
import ArticlesPlaycard from "./ArticlesPlaycard";
import { getArticles } from "./Utils/Axios";
import ClipLoader from "react-spinners/ClipLoader";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((response) => {
        return response;
      })
      .then((body) => {
        setArticles(body);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <ClipLoader color={"#36D7B7"} loading={isLoading} size={150} />
      ) : (
        <ul className="ArticlesList">
          {articles.map((article) => {
            return (
              <>
                <ArticlesPlaycard key={article.article_id} article={article} />
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6} md={4}>
                      <Item>
                        <ArticlesPlaycard
                          key={article.article_id}
                          article={article}
                        />
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Articles;
