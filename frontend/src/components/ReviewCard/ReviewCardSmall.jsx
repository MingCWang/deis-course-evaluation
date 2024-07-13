import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, styled  } from '@mui/material/styles';
import { format } from 'date-fns';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import { display, margin, width } from '@mui/system';
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

	const cardStyle = {
		backgroundColor: 'cardBackground.main',
		maxWidth: 500,
		borderRadius: '3px',
		margin: '0 auto 30px',
    };
	
	let rating = review.rate;
    let color;
	
    if (rating % 1 === 0) {
        rating = rating.toFixed(1);
    } 
	console.log(rating);
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
		margin: '0 auto'
	}

	
    const formattedDate = format(new Date(review.createdAt), 'MMMM do, yyyy');


    return (
        <ThemeProvider theme={customTheme}>
			<Card sx={cardStyle}>
				<Box sx={ratingBoxStyle} />
				<Box sx={cardContainer}>
					{/* <Box sx={ratingBoxStyle} >
						<Typography variant='h5' color='cardHeadline.main'>{Math.round(rating)}</Typography>
					</Box> */}
					<CardContent>
						<Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'space-between'}}>
							<Typography gutterBottom variant='h5' component='div' color='cardParagraph.main' style={{fontWeight: 500}}>
								{review.course.name} 
							</Typography>
							<Typography color='cardHighlight.main'>
								{formattedDate}
							</Typography>
						</Box>
						<Typography color='cardParagraph.main' sx={{pb: 2}}>
							{review.professor}
						</Typography>
						<Typography variant='body2' color='cardParagraph.main' style={{fontWeight: 300}}>
								Lizards are a widespread group of squamate reptiles, with
								over 6,000 species, ranging across all continents except
								Antarctica	Lizards are a widespread group of squamate reptiles, with
								over 6,000 species, ranging across all continents except
								Antarctica
							</Typography>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<Typography variant='body2' color='cardParagraph.main' style={{fontWeight: 300}}>
								Lizards are a widespread group of squamate reptiles, with
								over 6,000 species, ranging across all continents except
								Antarctica	Lizards are a widespread group of squamate reptiles, with
								over 6,000 species, ranging across all continents except
								Antarctica
							</Typography>
						</Collapse>
					</CardContent>
					<CardActions disableSpacing sx={{marginBottom: '10px'}}>
							{/* <Button size='small'>Share</Button> */}
							<Button variant="outlined" sx={{borderColor: 'cardParagraph.main', color: 'cardParagraph.main'}} startIcon={<ThumbUpAlt sx={{color: 'cardParagraph.main'}} />}>
								{review.likes}
							</Button>
							<IconButton aria-label="thumb down">
								<ThumbDownAltIcon sx={{color: 'cardParagraph.main'}}/>
							</IconButton>	
							<ExpandMore
								expand={expanded}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more"
								>
								<ExpandMoreIcon />
							</ExpandMore>
						</CardActions>
					</Box>
			</Card>
        </ThemeProvider>

    );
}
