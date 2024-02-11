import { Schema, model } from 'mongoose';

const tasksSchema: Schema = new Schema(
	{
		name: {
			type: String,
			require: true,
			trim: true
		},
		done: {
			type: Boolean,
			require: true
		},
	},
	{
		versionKey: false,
		timestamps: true
	}
);

const Tasks = model('Tasks', tasksSchema);

export default Tasks;
