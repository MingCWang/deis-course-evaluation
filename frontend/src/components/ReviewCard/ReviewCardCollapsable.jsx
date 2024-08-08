/**
 * @file A collapsable review card component that displays a review with a course name, professor, rating, comment, and advice.
 *
 * NOT IMPLEMENTED: The review card is not yet used in the application.
 */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, styled } from '@mui/material/styles';
import { format } from 'date-fns';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import customTheme from '../../utils/ColorTheme.jsx';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ReviewCardSmall({ review }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let rating = review.rate;
    let color;

    if (rating % 1 === 0) {
        rating = rating.toFixed(1);
    }
    if (rating == 5) {
        color = 'A.main';
    } else if (rating >= 4) {
        color = 'B.main';
    } else if (rating >= 3) {
        color = 'C.main';
    } else if (rating >= 2) {
        color = 'D.main';
    } else if (rating >= 1) {
        color = 'F.main';
    }

    const cardStyle = {
        backgroundColor: 'cardBackground.main',
        maxWidth: 800,
        borderRadius: '3px',
        margin: '0 auto',
    };

    const ratingBoxStyle = {
        backgroundColor: color,
        color: 'cardHeadline.main',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const cardContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        width: '90%',
        margin: '0 auto',
    };

    const formattedDate = format(new Date(review.createdAt), 'MMMM do, yyyy');

    const DISPLAY_LENGTH = 300;

    const displayText =
        review.comment.length > DISPLAY_LENGTH
            ? `${review.comment.substring(0, DISPLAY_LENGTH)}...`
            : review.comment;
    const hiddenText =
        review.comment.length > DISPLAY_LENGTH
            ? review.comment.substring(DISPLAY_LENGTH)
            : '';

    return (
        <ThemeProvider theme={customTheme}>
            <Card sx={cardStyle}>
                <CardActionArea>
                    <Box sx={ratingBoxStyle} />
                    <Box sx={cardContainer}>
                        {/* <Box sx={ratingBoxStyle} >
							<Typography variant='h5' color='cardHeadline.main'>{Math.round(rating)}</Typography>
						</Box> */}
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    textAlign: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='div'
                                    color='cardParagraph.main'
                                    style={{ fontWeight: 500 }}
                                >
                                    {review.course.name}
                                </Typography>
                                <Typography color='cardHighlight.main'>
                                    {formattedDate}
                                </Typography>
                            </Box>
                            <Typography
                                color='cardParagraph.main'
                                variant='h6'
                                sx={{
                                    pb: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    color='cardParagraph.main'
                                    sx={{ pr: 1, fontWeight: 300 }}
                                >
                                    with{' '}
                                </Typography>{' '}
                                {review.professor}
                            </Typography>

                            <Typography
                                variant='body2'
                                color='cardParagraph.main'
                                style={{ fontWeight: 300 }}
                            >
                                <Typography color='cardParagraph.main'>
                                    Comment
                                </Typography>
                                {displayText}
                            </Typography>
                            <Collapse
                                in={expanded}
                                timeout='auto'
                                unmountOnExit
                            >
                                <Typography
                                    variant='body2'
                                    color='cardParagraph.main'
                                    style={{ fontWeight: 300 }}
                                >
                                    {hiddenText}
                                    <Typography color='cardParagraph.main'>
                                        What could be improved?
                                    </Typography>
                                    {review.commentProf}
                                    <Typography color='cardParagraph.main'>
                                        Advice
                                    </Typography>
                                    {review.advice}
                                </Typography>
                            </Collapse>
                        </CardContent>
                    </Box>
                </CardActionArea>
                <CardActions
                    disableSpacing
                    sx={{ margin: '10px auto', width: '90%' }}
                >
                    {/* <Button size='small'>Share</Button> */}
                    <Button
                        variant='outlined'
                        sx={{
                            borderColor: 'cardParagraph.main',
                            color: 'cardParagraph.main',
                        }}
                        startIcon={
                            <ThumbUpAlt sx={{ color: 'cardParagraph.main' }} />
                        }
                    >
                        {review.likes}
                    </Button>
                    <IconButton aria-label='thumb down'>
                        <ThumbDownAltIcon
                            sx={{ color: 'cardParagraph.main' }}
                        />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label='show more'
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}
