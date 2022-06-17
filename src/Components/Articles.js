import { useState, useEffect } from "react";
import ArticlesPlaycard from "./ArticlesPlaycard";
import { getArticles } from "./Utils/Axios";
import ClipLoader from "react-spinners/ClipLoader";
import Item from "./Utils/GridCss";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import MenuPopupState from "./DropDown";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorted, setSorted] = useState(false);
  const [sortByCat, setSortByCat] = useState([]);

  useEffect(() => {
    getArticles()
      .then((response) => {
        return response;
      })
      .then((body) => {
        setArticles(body);
        setIsLoading(false);
      });
  }, [sortByCat, sorted]);

  const HandleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ArticlesList">
      {isLoading ? (
        <ClipLoader color={"#36D7B7"} loading={isLoading} size={150} />
      ) : sorted ? (
        <div>
          <MenuPopupState setSorted={setSorted} setSortByCat={setSortByCat} />
          <Grid container spacing={2}>
            {sortByCat.map((article) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={article.article_id}>
                  <Item>
                    <ArticlesPlaycard article={article} />
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </div>
      ) : (
        <div>
          <MenuPopupState setSorted={setSorted} setSortByCat={setSortByCat} />
          <Grid container spacing={2}>
            {articles.map((article) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={article.article_id}>
                  <Item>
                    <ArticlesPlaycard article={article} />
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Articles;
