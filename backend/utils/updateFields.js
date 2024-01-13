import EvalForm from '../models/evalForm.js';
import mongoose from 'mongoose';

// Define the schema for 'likedIds' field
const likedIdsSchema = new mongoose.Schema({
  type: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  default: [],
});

mongoose
  .connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/course-eval', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log(`mongodb is connected on location: ${mongoose.connection.host}:${mongoose.connection.port}`);

    // Use updateMany to add 'likedIds' field to all documents
    await EvalForm.updateMany(
      {}, // Match all documents
      {
        $set: {
          likedIds: likedIdsSchema,
        },
      }
    );

    console.log('Failed added to existing documents.');
    process.exit();
  })
  .catch((err) => {
    console.log(`mongodb connection failed ${err}`);
  });
