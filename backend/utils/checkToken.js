import jwt from 'jsonwebtoken';



// TO DO: A thorough jwt validation is important, make sure jwt is well validified 
export const validateToken = async (req, res, next) => {
	const token = req.get('Authorization').split(' ')[1];
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		next();
	} catch (err) {
		console.log({ err });
		res.status(401).json({ message: 'Invalid token' })
	}
}