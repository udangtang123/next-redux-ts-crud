import Employee from "@/models/User";
import {wrapper} from "../../../redux/store";
// import "@/utils/dbConnect";

export default async (req: any, res: any) => {
	const { method } = req;

	let collection = [
		{ "id": 0, "name": "Buğra Kara", "firstname": "Buğra", "lastname": "Kara" },
		{ "id": 1, "name": "Zulkif Amir", "firstname": "Zulkif", "lastname": "Amir" }
	]

	// const store = await wrapper.getState();
	switch (method) {
		case "GET":
			try {
				return res.status(200).json({
					success: true,
					data: collection,
				});

			} catch (error) {
				return res.status(400).json({
					success: false,
				});
			}
		case "POST":
			try {
				const newItem = req.body;
				collection.push(newItem);
				return res.status(200).json({
					success: true,
					data: req.body,
				});
			} catch (error) {
				return res.status(400).json({
					success: false,
				});
			}

		case "PUT":
			try {
				const userId = req.headers.id;
				const uploadedUser = req.body;
				const index = collection.findIndex((user) => user.id == userId);
				if (index != -1) {
					res.status(200).json({uploadedUser: uploadedUser});
				} else {
					res.status(404).json({ error: 'User not found' });
				}
			} catch (err) {
				return res.status(400).json({
					success: false,
				});
			}
		case "DELETE":
			try{
				const userId = req.headers.id;
				return res.status(200).json({userId: userId});
			} catch (err) {
				return res.status(400).json({
					success: false,
				});
			}

		default:
			res.setHeaders("Allow", ["GET", "POST"]);
			return res
				.status(405)
				.json({ success: false })
				.end(`Method ${method} Not Allowed`);
	}
};
