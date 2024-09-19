import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import customTheme from '../../../utils/ColorTheme.jsx';

export default function CommentSection({
    comment,
    commentProf,
    advice,
    handleCommentChange,
    handleCommentProfChange,
    handleAdviceChange,
}) {

	const desc = {
		fontSize: '15px',
		fontWeight: 200
	}

	const title = {
		fontSize: '25px',
		marginBottom: '10px'
	}

  return (
	<ThemeProvider theme={customTheme}>
		<Box
			component="form"
			sx={{
				m : 1,
				width: '800px',
				'& .MuiTextField-root': {mb: 5, mt:3, width: '800px' },
			}}
			noValidate
			autoComplete="off"

		>
		<div>
			<h3 style={title}>Comment</h3>
			<p style={desc}>What do you want people to know about the course? What's your overall experience? ...</p>
			<TextField
				id="outlined-multiline-static"
				multiline
				rows={8}
				defaultValue="leave something helpful for your fellow students that's at least 100 characters!"
			/>
		</div>
		<div>
			<h3 style={title}>Advice</h3>
			<p style={desc}>What did you wish you knew before class? What was the best way to study for the exams? ...</p>
			<TextField
				id="outlined-multiline-static"
				label="optional"
				multiline
				rows={4}
			/>
		</div>
		<div>
		<h3 style={title}>Comment on the professor</h3>
		<p style={desc}>Anything you want to point out about this professor? How's their teaching style? </p>
			<TextField
				id="outlined-multiline-static"
				label="optional"
				multiline
				rows={4}
			/>
		</div>
		<div>
			<h3 style={title}>What would you change about the course?</h3>
			<p style={desc}>Professors are more curious about their comments than you think! Put anything you think would be helpful for them to improve their course! </p>
			<TextField
				id="outlined-multiline-static"
				label="optional"
				multiline
				rows={4}
			/>
		</div>
		</Box>
	</ThemeProvider>

  );
}
