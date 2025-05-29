import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  position: { type: String, required: true },
  company: { type: String, required: true },
  status: {
    type: String,
    enum: ['pending', 'interview', 'declined'],
    default: 'pending',
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);
export default Job;
