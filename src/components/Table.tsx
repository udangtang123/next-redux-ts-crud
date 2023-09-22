import { useSelector, useDispatch } from "react-redux";
import {
	deleteEmployee,
	fetchEmployees,
	setModalOpen,
	setSelectedEmployee,
} from "@/redux";
import { useEffect } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPencil} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export function Table() {
	const state = useSelector((state: any) => state.employee);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchEmployees());
	}, [dispatch]);

	return (
		<table className="table">
			<thead className="table__head">
				<tr>
					<th>Full Name</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Actions</th>
				</tr>
			</thead>

			<tbody className="table__body">
				{state.employeeList?.map(({ id, name, firstname, lastname }: any) => (
					<tr key={name}>
						<td>{name}</td>
						<td>{firstname}</td>
						<td>{lastname}</td>
						<td>
							<button
								className="btn btn__compact btn__edit"
								onClick={() => {
									dispatch(setSelectedEmployee(id));
									dispatch(setModalOpen(true));
								}}
							>
								<FontAwesomeIcon icon={faPencil as IconProp}/>
							</button>
							<button
								className="btn btn__compact btn__delete"
								onClick={() => {
									dispatch(deleteEmployee(id));
								}}
							>
								<FontAwesomeIcon icon={faTrashCan as IconProp}/>
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
