const mongoose = require('mongoose');
const Subscriber = require('../models/subscriber');
const passportLocalMongoose = require('passport-local-mongoose');
const randToken = require('rand-token');

const userSchema = mongoose.Schema(
	{
		name: {
			first: {
				type: String,
				trim: true,
			},
			last: {
				type: String,
				trim: true,
			},
		},
		email: {
			type: String,
			required: true,
			lowercase: true,
			unique: true,
		},
		zipCode: {
			type: Number,
			min: [10000, 'zip code is too short!'],
			max: 99999,
		},
		// password: {
		//   type: String,
		//   required: true,
		// },
		courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
		subscribedAccount: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Subscriber',
		},
		apiToken: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.virtual('fullName').get(function () {
	return `${this.name.first} ${this.name.last}`;
});

userSchema.pre('save', function (next) {
	let user = this;
	if (user.subscribedAccount === undefined) {
		Subscriber.findOne({ email: user.email })
			.then((subscriber) => {
				user.subscribedAccount = subscriber;
				next();
			})
			.catch((error) => {
				console.log(`Error in connecting subscriber: ${error.message}`);
			});
	} else {
		next();
	}
});

userSchema.pre('save', function (next) {
	let user = this;
	if (!user.apiToken) user.apiToken = randToken.generate(16);
	next();
});

// userSchema.pre("save", function (next) {
//   let user = this;
//   bcrypt
//     .hash(user.password, 10)
//     .then((hash) => {
//       user.password = hash;
//       next();
//     })
//     .catch((error) => {
//       console.log(`Error in hashing password: ${error.message}`);
//       next(error);
//     });
// });

// userSchema.methods.passwordComparison = function (inputPassword) {
//   let user = this;
//   return bcrypt.compare(inputPassword, user.password);
// };

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', userSchema);
