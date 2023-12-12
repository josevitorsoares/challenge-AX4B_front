import { Card, CardContent, Typography } from "@mui/material";
import { IComment } from "../../../types/comment";

interface ICommentCard {
    comment: IComment[];
}

export const ManagerInformationComments = ({ comment }: ICommentCard) => {
    return comment.map((iten) => {
        return (
            <Card key={iten.id}>
                <CardContent>
                    <Typography component="div">
                        {iten.name}
                    </Typography>
                    <Typography color="text.secondary">
                        {iten.email}
                    </Typography>
                    <Typography variant="body2">
                        {iten.body}
                    </Typography>
                </CardContent>
            </Card>
        );
    });
};