import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./Utils/Axios";
import ClipLoader from "react-spinners/ClipLoader";
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
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Item>
                <h2>{singleArticle.title}</h2>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Author: {singleArticle.author}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                Date:
                {singleArticle.created_at}
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <p>{singleArticle.body}</p>
              </Item>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default SingleArticle;
