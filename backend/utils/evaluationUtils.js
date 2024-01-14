import EvalForm from '../models/evalForm.js';


/**
 * Gets the parameters from the request body and returns them in an JSON object
 * @MingCWang
 * @param {Object} body - request body
 * @returns {{course: string, semester: string, professor: string, difficulty: number, rate: number, attendance: string, gradeRecieved: string, delivery: string, comment: string}} - JSON object with the parameters
 */
export const getEvalFormParams = ({ userId, courseIdName, semester, professor, difficulty, rate, usefulness, attendance, grade, delivery, commentString, commentProfString, adviceString }) => {

	return {
		userId,
		course: courseIdName,
		semester,
		professor,
		difficulty,
		rate, 
		usefulness,
		attendance,
		grade,
		delivery,
		comment: commentString,
		commentProf: commentProfString,
		advice: adviceString
	};
};

export async function calcAverage(course){
	const numComments = course.comments.length;
	let ratingSum = 0;
	let difficultySum = 0;
	let usefulnessSum = 0;
	let gradeSum = 0;	
	let numGrades = 0;

	for(let i = 0; i < numComments; i++){
		const evalForm = await EvalForm.findById(course.comments[i]);
		ratingSum += evalForm.rate;
		difficultySum += evalForm.difficulty;
		usefulnessSum += evalForm.usefulness;
		if(evalForm.grade !== 0){
			gradeSum += evalForm.grade;
			numGrades++;
		}
	}

	console.log(numComments)
	console.log(course.comments[0])


	course.ratingAverage = Math.round((ratingSum / numComments)*10)/10;
	course.difficultyAverage = Math.round((difficultySum / numComments)*10)/10;
	course.usefulnessAverage = Math.round((usefulnessSum / numComments)*10)/10;
	if(numGrades !== 0){
		course.gradeAverage.grade = Math.round((gradeSum / numGrades)*10)/10;
		course.gradeAverage.numGrades = numGrades + 1;
	}else{
		course.gradeAverage.grade = 0;
		course.gradeAverage.numGrades = 0;
	
	}

	const savedCourse = await course.save();

	console.log({ savedCourse });
}
