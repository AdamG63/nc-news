const axios = require("axios");

const newsApi = axios.create({
  baseURL: "https://adams-api.herokuapp.com/api",
});
export const getArticles = () => {
  return newsApi.get("/articles").then((response) => {
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

export const getArticleBytopic = (slug) => {
  return newsApi.get(`/articles?topic=${slug}`).then((response) => {
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
