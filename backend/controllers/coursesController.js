/**
 * @module EvaluationsController
 */
import Course from '../models/course.js';

/**
 * @todo Implement error handling for edge cases
 * @summary GET api/courses
 * @description Get all course 
 * @sorai910
 * @async
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
async function getCourses(req, res, next) {
	let course = req.query.course;
	let page = req.query.page;
	const limit = 20;
	let courses = [];
	try {
		if(!course){
			courses = await Course.find({});
		}else{

		
			
			courses = await Course.find(
				{$or: [
					{ "course": { $regex: course, $options: "i" }},
					{ "courseTitle": { $regex: course, $options: "i" }},
				]},
			);
			if(courses.length === 0){
				// Use regular expressions to separate letters and numbers
				const matches = course.match(/([a-zA-Z]+)(.*)/);

				if (matches) {
					const letters = matches[1]; // Extract letters
					const numbers = matches.slice(2, matches.length); // Extract numbers
					// course = new RegExp(`^${letters}.*${numbers}$`, 'i'); // Create a regular expression
					course = letters + " " + numbers;
					console.log(course);
				}
				courses = await Course.find(
					{$or: [
						{ "course": { $regex: course, $options: "i" }},
						{ "courseTitle": { $regex: course, $options: "i" }},
					]},
				);
			}
		}

		if (courses.length <= limit) {
			res.status(200).json({courses: courses, hasmore: false});
			return;
		}
		res.status(200).json({courses: courses.slice((page-1)*limit, page*limit), hasmore: courses.length > page*limit});

	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

/**
 * @todo Implement error handling for edge cases
 * @summary GET api/courses/:id
 * @description Get single course 
 * @async
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
async function getCourse(req, res) {
	const { id } = req.params;
	try {
		const course = await Course.findById(id);
		res.status(200).json(course);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}


/**
 * @description Get all evaluations with the given course id
 * @summary POST api/courses/reviews
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function getEvalWithIds(req, res) {
	const { courseId } = req.body;
	try {
		const course = await Course.findById(courseId);
		const result = await Course.findById(courseId).populate('comments');
		const evalForms = result.comments;
		if (evalForms.length === 0) {
			// res.status(404).json({ error: 'No evaluations' });
			res.status(200).json({error: "no evaluations"});
			return;
		}
		res.status(200).json(evalForms);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
}

export { getCourses, getCourse, getEvalWithIds };