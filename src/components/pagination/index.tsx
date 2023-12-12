import { useEffect, useState } from "react"

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CircularProgress from "@mui/material/CircularProgress";

import { IPost } from "../../../types/post";
import { getPosts } from "../../services/postsService";
import { ManagerInformationPosts } from "../posts";

interface IGetPosts {
    postsOnPage: IPost[];
    totalPosts: number;
}

export const AppPagination = () => {
    const [post, setPost] = useState<IPost[]>([])
    const [totalPosts, setTotalPosts] = useState<number>(1);
    const [page, setPage] = useState<number>(1);
    const [load, setLoad] = useState<boolean>(true);

    const handlePageChange = (event: unknown, page: number) => {
        setPage(page);
    }

    useEffect(() => {
        async function findPosts() {
            try {
                setLoad(true);
                const { postsOnPage, totalPosts }: IGetPosts = await getPosts(page);
                setPost(postsOnPage);
                setTotalPosts(totalPosts);
            } catch (error) {
                console.error(error);
            } finally {
                setLoad(false);
            }
        }
        findPosts();
    }, [page]);

    return (
        <>
            {load ?
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                    <CircularProgress />
                </div> :
                <ManagerInformationPosts post={post} />
            }
            <br />
            <Stack spacing={2} style={{ display: "flex", alignItems: "center" }}>
                <Pagination
                    count={Math.ceil(totalPosts / 20)}
                    variant="outlined"
                    shape="rounded"
                    onChange={handlePageChange} />
            </Stack>
        </>
    );
}