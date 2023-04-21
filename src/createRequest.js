import axios from "axios";

export const createRequest = axios.create({
  baseURL: process.env.REACT_APP_GRAPHQL_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRAPI,
  },
});