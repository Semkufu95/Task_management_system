const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    user: { type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Done'],
        default: 'To Do'
      },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    },
    deadline: { type: Date }
}, { timestamps: true });


export default mongoose.model('Task', TaskSchema);