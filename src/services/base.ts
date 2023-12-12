import axios from "axios";

export const createPostsChannel = axios.create({
    baseURL: "http://localhost:3333"
});