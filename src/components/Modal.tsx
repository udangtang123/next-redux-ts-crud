import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import cx from "clsx";

import {
	addEmployee,
	setModalOpen,
	setSelectedEmployee,
	updateEmployee,
} from "@/redux";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function Modal() {
	const { register, handleSubmit, formState: {errors} }: any = useForm();

	const [username, setUserName] = useState("");
	const [userfirstname, setUserFirstName] = useState("");
	const [userlastname, setUserLastName] =useState("")


	const state = useSelector((state: any) => state.employee);

	const dispatch = useDispatch();

	const closeModal = () => {
		// reset();
		setUserName("")
			setUserLastName("")
			setUserFirstName("")
		dispatch(setModalOpen(false));
		dispatch(setSelectedEmployee(undefined));
	};

	const onSubmitHandler = (data: any) => {
		if (data) {
			setUserName("")
			setUserLastName("")
			setUserFirstName("")
			closeModal();
		}
		if (state.selectedEmployee) {
			dispatch(
				updateEmployee({
					_id: state.selectedEmployee.id,
					...data,
				})
			);
		} else {
			dispatch(addEmployee({...data, id:state.employeeList.length }));
		}
	};

	useEffect(()=>{
		let employee = state.selectedEmployee
		if(employee){
			setUserName(employee.name);
			setUserFirstName(employee.firstname)
			setUserLastName(employee.lastname)
		}
	},[state.selectedEmployee])

	const onchangeusername = (event: any) => {
		setUserName(event.target.value)
	}

	const onchangefirstname=(event: any) => {
		setUserFirstName(event.target.value)
	}

	const onchangelastname = (event: any) => {
		setUserLastName(event.target.value)
	}

	// useEffect(() => {
	// 	if (state.selectedEmployee) {
	// 		setValue("name", state.selectedEmployee.name);
	// 		setValue("email", state.selectedEmployee.email);
	// 		setValue("address", state.selectedEmployee.address);
	// 		setValue("phone", state.selectedEmployee.phone);
	// 	}
	// }, [state.selectedEmployee, setValue]);

	return state.isModalOpen
		? ReactDOM.createPortal(
				<div className="modal">
					<div className="modal__content">
						<header className="header modal__header">
							<h1 className="header__h2">
								{state.selectedEmployee ? (
									<>
										Edit <span>Employee</span>
									</>
								) : (
									<>
										Add <span>Employee</span>
									</>
								)}
							</h1>
							<button
								className="btn btn__compact btn__close"
								onClick={closeModal}
							>
								<FontAwesomeIcon icon={faTimes as IconProp}/>
							</button>
						</header>

						<form
							className="form modal__form"
							onSubmit={handleSubmit(onSubmitHandler)}
							noValidate
						>
							<div className="form__element">
								<label
									htmlFor="nameInput"
									className={cx("label", errors.name && "label--error")}
								>
									{errors?.name?.type == "required" ? (
										"Full name is required!"
									) : errors?.name?.type=="minLength" ? ("Minimum of 4 charaters"): errors?.name?.type == "maxLength"?("Maximum of 44 characters") :(
										<>
											Full name&nbsp;<span className="label__required">*</span>
										</>
									)}
								</label>
								<input
									type="text"
									id="nameInput"
									name="name"
									placeholder="Full name"
									className={cx("input", errors.name && "input--error")}
									{...register('name', { required: true, minLength: 4, maxLength: 44})}
									readOnly={state.selectedEmployee? true: false}
									value={username}
									onChange={(e)=>onchangeusername(e)}
								/>
							</div>

							<div className="form__element">
								<label
									htmlFor="fNameArea"
									className={cx("label", errors.firstname && "label--error")}
								>
									{errors.firstname ? (
										"First Name is required!"
									) :
									errors?.firstname?.type=="minLength" ? ("Minimum of 4 charaters"): errors?.firstname?.type == "maxLength"?("Maximum of 48 characters") : (
										<>
											First Name&nbsp;<span className="label__required">*</span>
										</>
									)}
								</label>
								<input
									id="fNameArea"
									type="text"
									name="firstname"
									placeholder="ex: John"
									className={cx("area", errors.firstname && "input--error")}
									{...register('firstname', { required: "Fist Name is Required", minLength: 4, maxLength: 48 })}
									value={userfirstname}
									onChange={(e)=>onchangefirstname(e)}
								/>
							</div>

							<div className="form__element">
								<label
									htmlFor="lNameArea"
									className={cx("label", errors.lastname && "label--error")}
								>
									{errors.lastname ? (
										`${errors.lastname.message}`
									) : errors?.lastname?.type == "maxLength"?("Maximum of 44 characters") : (
										<>
											Last Name&nbsp;<span className="label__required">*</span>
										</>
									)}
								</label>
								<input
									type="text"
									id="lNameArea"
									name="lastname"
									placeholder="ex: Doe"
									className={cx("input", errors.lastname && "input--error")}
									{...register('lastname', {
										required: "Last Name is required!", maxLength: 55
									})}
									value={userlastname}
									onChange={(e)=>onchangelastname(e)}
								/>
							</div>

							

							{/* <div className="form__element">
								<label
									htmlFor="phoneNumber"
									className={cx("label", errors.phone && "label--error")}
								>
									{errors.phone ? (
										`${errors.phone.message}`
									) : (
										<>
											Phone&nbsp;<span className="label__required">*</span>
										</>
									)}
								</label>
								<input
									type="number"
									id="phoneNumber"
									name="phone"
									placeholder="Phone"
									className={cx("input", errors.phone && "input--error")}
									{...register('phone', {
										required: "Phone is Required",
										minLength: {
											value: 11,
											message: "Minimum of 11 digits",
										},
										maxLength: {
											value: 12,
											message: "Maximum of 12 digits",
										},
									})}
								/>
							</div> */}

							<div className="form__action">
								<button
									className="btn btn__icon btn__cancel"
									type="button"
									onClick={closeModal}
								>
									<FontAwesomeIcon icon={faTimes as IconProp}/>
									 Cancel
								</button>
								<button className="btn btn__primary btn__icon" type="submit">
									<FontAwesomeIcon icon={faCheck as IconProp}/>
									{state.selectedEmployee ? "Update" : "Submit"}
								</button>
							</div>
						</form>
					</div>
				</div>,
				document.body
		  )
		: null;
}
