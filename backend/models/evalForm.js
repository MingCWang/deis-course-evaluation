
import { model, Schema } from 'mongoose';

const evalFormSchema = Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		// why does the course field automatically includes the evalform _id again like this 
		//  course: {
		// 	id: new ObjectId("64dee5847d7bf2ac18f32a29"),
		// 	name: 'COSI 10A ',
		// 	_id: new ObjectId("64e0771f3e9e76b63b23aeda")
		//   },
		
		course: {
			type:{
				id:{
					type: Schema.Types.ObjectId,
					ref: 'Course',
					required: true
				},
				name:{
					type: String,
					requried: true
				}
			}
			
		},
		semester: {
			type: String,
			required: true
		},
		professor: {
			type: String,
			required: true
		},
		difficulty: {
			type: Number,
			required: true
		},
		rate: {
			type: Number,
			required: true
		},
		usefulness: {
			type: Number,
			required: true
		},
		attendance: {
			type: Boolean,
			required: true
		},
		grade: {
			type: Number,
		},
		delivery: {
			type: String,
			required: true
		},
		comment: {
			type: String,
			required: true
		},
		commentProf: {
			type: String,
		},
		advice: {
			type: String,
		},
		likes: {
			type: Number,
			default: 0
		}
	},
	{
		timestamps: true,
	});


export default model('EvalForm', evalFormSchema);