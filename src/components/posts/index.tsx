import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IPost } from "../../../types/post"
import { ManagerInformationComments } from "../comment";

interface IPostAccordion {
    post: IPost[];
}

export const ManagerInformationPosts = ({ post }: IPostAccordion) => {
    return post.map((iten) => {
        return (
            <Accordion key={iten.id}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{iten.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ManagerInformationComments comment={iten.comments}/>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        )
    })
}