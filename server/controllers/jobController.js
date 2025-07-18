import Job from '../models/Job.js';

export const createJob = async (req, res) => {
  const { position, company, status } = req.body;

  try {
    const job = await Job.create({
      position,
      company,
      status,
      createdBy: req.user.id,
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create job' });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ createdBy: req.user.id });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
};

// Add updateJob, deleteJob similarly...
