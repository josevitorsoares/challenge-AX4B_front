import { IPost } from "../../types/post";
import { createPostsChannel } from "./base";

export const getPosts = async (page: number) => {
    return createPostsChannel.get(`/posts?page=${page}`)
        .then((response) => {
            const { totalPosts, postsOnPage } = response.data as { 
                totalPosts: number, postsOnPage: [IPost] 
            };
            return {
                totalPosts,
                postsOnPage
            };
        })
        .catch((error) => {
            throw new Error(`Service Error \n${error}`);
        });
};