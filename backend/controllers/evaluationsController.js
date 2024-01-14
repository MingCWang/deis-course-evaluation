/**
 * @module EvaluationsController
 */
import EvalForm from '../models/evalForm.js';
import Course from '../models/course.js';
import User from '../models/user.js';
import { updateCourseAverages, getEvalFormParams } from '../utils/evaluationUtils.js';

/**
 * @summary POST api/v1/evaluations/forms
 * @description Creates a new EvalForm
 * 
 * Example request body:
 * 
 * {
 *    "courseIdName": {ObjectId(asdfagqerfas124), "COSI-10A"}
 *    "semester": "SPRING",
 *    "professor": "Timothy Hickey",
 *    "difficulty": "4",
 *    "rate": "4", 
 *    "usefulness": 5,
 *    "attendance": true,
 *    "grade-received": "A",
 *    "delivery": "In-Person", 
 *    "comment": "good"
 * }
 * @MingCWang 
 * @async
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} 201 - JSON object with the created EvalForm
 * @returns {Object} 500 - JSON object with the error message
 */
async function create(req, res) {
	try {
		const {courseIdName, userId} = req.body;
		console.log({courseIdName})
		// save evalform with the req aruguments 
		const newEvalForm = new EvalForm(getEvalFormParams(req.body, userId));
		const savedEvalForm = await newEvalForm.save();
		// add evalform id to course comments with the matching course id 
		const evalFormId = savedEvalForm._id;
		const course = await Course.findByIdAndUpdate(courseIdName.id, { $push: { comments: evalFormId } }, { new: true });
		console.log({course})
		// add evalform id to user evals with the matching user id
		if (userId !== 'anonymous'){
			const user = await User.findByIdAndUpdate(userId, { $push: { evals: evalFormId } }, { new: true });
		}
		console.log({savedEvalForm})
		try{
			await updateCourseAverages(course, savedEvalForm);
		}catch(err){
			throw err;
		}
		res.status(201).json(savedEvalForm);

	} catch (err) {
		res.status(500).json({ error: err.message });
		console.log(err);
	}
}

/** @MingCWang 
 * @async
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} 201 - JSON object with the updated EvalForm
 * @returns {Object} 500 - JSON object with the error message
 */
async function update(req, res) {
	try {
		// ******************************************
		// TODO: Update the course by removing the old evalForm and adding the new one
		//********************************************* */
		const {courseIdName, userId} = req.body;
		console.log({courseIdName})
		// save evalform with the req aruguments 
		const evalForm = await EvalForm.findByIdAndUpdate(req.params.id, getEvalFormParams(req.body, userId), {new: true});
		const savedEvalForm = await evalForm.save();
		// add evalform id to course comments with the matching course id 
		const course = await Course.findById(courseIdName.id);
		console.log({course})
		try{
			await updateCourseAverages(course, savedEvalForm);
		}catch(err){
			throw err;
		}
		res.status(201).json(savedEvalForm);

	} catch (err) {
		res.status(500).json({ error: err.message });
		console.log(err);
	}
} 

/** 
 * @async
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} 201 - JSON object with the deleted EvalForm
 * @returns {Object} 500 - JSON object with the error message
 */
async function remove(req, res) {
	try {
		const {courseId, userId} = req.body;
		const evalForm = await EvalForm.findByIdAndDelete(req.params.id);
		// remove evalform id to course comments with the matching course id
		const course = await Course.findById(courseId);
		const evalFormId = evalForm._id;
		const index = course.comments.indexOf(evalFormId);
		if (index !== -1) {
			course.comments.splice(index, 1);
			await course.save();
		}
		// remove evalform id to user evals with the matching user id
		if (userId){
			const user = await User.findById(userId);
			const index = user.evals.indexOf(evalFormId);
			if (index !== -1) {
				user.evals.splice(index, 1);
				await user.save();
			}
		}
		res.status(201).json(evalForm);

	} catch (err) {
		res.status(500).json({ error: err.message });
		console.log(err);
	}
} 

/**
 * @todo Implement error handling for edge cases
 * @summary GET api/v1/evaluations?course=course&semester=semester&professor=professor
 * @description Gets all EvalForms filtered with the given parameters    
 * @MingCWang
 * @async
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
async function read(req, res) {

	const { course, semester, professor } = req.query;
	let evalForms = [];
	try {
		if (semester) {
			evalForms = await EvalForm.find({ course: course, semester: semester });
		} else if (professor) {
			evalForms = await EvalForm.find({ course: course, professor: professor });
		} else {
			evalForms = await EvalForm.find({ course: course });
		}
		res.status(200).json(evalForms);
	} catch (err) {
		console.log(err	)
		res.status(500).json({ error: err.message });
	}
}


/**
 * @summary POST api/v1/evaluations/user
 * @description Get user evaluations with the given user id
 * @MingCWang
 * @async
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
async function readWithIds(req, res) {
	const { userId } = req.body;
	const user = await User.find({ _id: userId });
	console.log(user);
	console.log(user[0].evals);
	const ids = user[0].evals;
	let evalForms = [];
	try {
		evalForms = await EvalForm.find({ _id: { $in: ids } });
		res.status(200).json(evalForms);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

/**
 * @summary GET api/v1/evaluations/recent
 * @description Get most recent evaluations 
 * @MingCWang
 * @async
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
async function readRecent(req, res) {
	try {
        // const limit = parseInt(req.query.limit) || 10; // Limit the number of results (default to 10)
        const reviews = await EvalForm.find().sort({ createdAt: -1 }).limit(5);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

/**
 * @summary POST api/v1/evaluations/likes
 * @description Get most recent evaluations 
 * @MingCWang
 * @async
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
async function addLikes(req, res) {
    try {
        const { evalId, isLike, userId } = req.body;

		const user = await User.findById(userId);
		let updatedEvalForm;
        // Retrieve the updated document
		if (isLike === null) {  
			const currentEvalForm = await EvalForm.findById(evalId);
			if (!currentEvalForm) {
                return res.status(404).json({ message: "Document not found" });
            }

			if (currentEvalForm.likes <= 0) {
				updatedEvalForm = await EvalForm.findByIdAndUpdate(
					evalId,
					{ likes: 0 },
					{ new: true }
					);
                return res.status(200).json({ likes: 0, isLiked: false});
            }
			// if user is logged in, show them the courses that they upvoted
			if(user){
				if(user.upvotedCourses.includes(evalId)){
					return res.status(200).json({ likes: currentEvalForm.likes, isLiked: true});
				}
			}
			return res.status(200).json({ likes: currentEvalForm.likes, isLiked: false});
		}


		if (!isLike) {
		
			// Add courseId to upvotedCourses if it's not already there
			if (!user.upvotedCourses.includes(evalId)) {
				user.upvotedCourses.push(evalId);
				await user.save();
				// Increment likes count
				updatedEvalForm = await EvalForm.findByIdAndUpdate(
					evalId,
					{ $inc: { likes: 1 } },
					{ new: true }
					);
			}else{
				updatedEvalForm = await EvalForm.findById(evalId);
				return res.status(200).json({ likes: updatedEvalForm.likes, isLiked: true});
			}
			return res.status(200).json({ likes: updatedEvalForm.likes, isLiked: true});
		} else {
				
			// Remove userId from likedID if it's there
			const index = user.upvotedCourses.indexOf(evalId);
			if (index !== -1) {
				user.upvotedCourses.splice(index, 1);
				await user.save();
				// Decrement likes count
				updatedEvalForm = await EvalForm.findByIdAndUpdate(
					evalId,
					{ $inc: { likes: -1 } },
					{ new: true }
				);
			}
			return res.status(200).json({ likes: updatedEvalForm.likes, isLiked: false});
		}
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


/**
 * @summary GET api/v1/evaluations/totalReviews
 * @description Get most recent evaluations 
 * @MingCWang
 * @async
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
async function totalReviews(req, res) {
	try {
		const reviews = await EvalForm.find();
		const total = reviews.length;
        res.status(200).json({total});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}



export { remove, create, update, read, readWithIds, readRecent, addLikes, totalReviews};
