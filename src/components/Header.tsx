import { useDispatch } from "react-redux";
import { setModalOpen } from "@/redux";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function Header() {
	const dispatch = useDispatch();

	return (
		<header className="header">
			<h1 className="header__h1">
				Manage <span>Employees</span>
			</h1>
			<button
				className="btn btn__primary btn__icon"
				onClick={() => {
					dispatch(setModalOpen(true));
				}}
			>
				<FontAwesomeIcon icon={faUserPlus as IconProp}/>
				<span>Add new</span>
			</button>
		</header>
	);
}
