import React, { useState, useEffect } from 'react';

export default function ProfileStatus(props) {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const handleStatusChange = e => {
		setStatus(e.target.value);
	};

	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	return (
		<div>
			{editMode && (
				<input
					type="text"
					onChange={handleStatusChange}
					value={status}
					onBlur={deactivateEditMode}
					autoFocus={true}
				/>
			)}
			{!editMode && (
				<span onClick={activateEditMode}>
					{status || 'Введите статус'}
				</span>
			)}
		</div>
	);
}
