import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required!"],
		trim: true,
	},
	firstname: {
		type: String,
		required: [true, "Fist Name is required!"],
		trim: true,
	},
	lastname: {
		type: String,
		required: [true, "Last Mame is required!"],
		trim: true,
	},
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Employee ||
	mongoose.model("Employee", EmployeeSchema);
