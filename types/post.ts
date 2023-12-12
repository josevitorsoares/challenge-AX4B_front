import { IComment } from "./comment";

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
    comments: IComment[];
}