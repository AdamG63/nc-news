import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./Utils/Axios";
import ClipLoader from "react-spinners/ClipLoader";
import Grid from "@mui/material/Grid";
import Item from "./Utils/GridCss";
import Votes from "./Votes";
import Comments from "./Comments";
import AddComment from "./AddComment";

const SingleArticle = ({ selectUser }) => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [isError, setIsError] = useState(null);
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    getArticleById(article_id)
      .then((body) => {
        setSingleArticle(body.data.article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(err.response.data);
      });
  }, [article_id]);

  if (isError) {
    return <p className="Error">Oh no, an error occured!</p>;
  }

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
            <Grid item xs={5}>
              <Item>Author: {singleArticle.author}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{singleArticle.created_at.slice(0, 10)}</Item>
            </Grid>

            <Grid item xs={3}>
              <Item>
                <Votes pre_votes={singleArticle.votes} />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <p>{singleArticle.body}</p>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <div>
                  <span style={{ fontWeight: "bold" }}>Comments</span>
                </div>
                <Comments newComment={newComment} selectUser={selectUser} />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <AddComment
                  selectUser={selectUser}
                  setNewComment={setNewComment}
                />
              </Item>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default SingleArticle;
