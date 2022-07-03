const axios = require("axios");

const newsApi = axios.create({
  baseURL: "https://adams-api.herokuapp.com/api",
});
export const getArticles = (order) => {
  console.log(order);
  return newsApi
    .get("/articles", { params: { order_by: order } })

    .then((response) => {
      return response.data.articles;
    });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((response) => {
    return response;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((response) => {
    return response.data.topics;
  });
};

export const getArticleBytopic = (slug, order) => {
  console.log(order);
  return newsApi
    .get(`/articles?topic=${slug}`, { params: { order_by: order } })

    .then((response) => {
      // console.log(response.data.articles);
      return response.data.articles;
    });
};

export const patchArticleById = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((response) => {
      return response;
    });
};

export const getComment = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data;
  });
};

export const postComment = (article_id, addComment, isAuthor) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      body: addComment,
      username: isAuthor,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.dir(err);
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).then((response) => {
    return response;
  });
};
