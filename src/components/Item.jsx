import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteTodo, setCompleteTodo} from '../redux/todosSlice';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


const Item = ({selectedTodo}) =>{
	const {taskTitle, taskBody, id, isCompleted} = selectedTodo;
	const dispatch = useDispatch();
	const [checked, setChecked] = useState(isCompleted);

	const handleDelete = (id, event) =>{
		event.stopPropagation();
		event.preventDefault();
		dispatch(deleteTodo({id}));
	};
	const handleChange = (event) =>{
		setChecked(!checked);
		dispatch(setCompleteTodo({ isChecked: event.target.checked, id }));
	};

	const handleStopPropagation = (event) =>{
		event.stopPropagation();
		event.preventDefault();
	};
	return (
		<div key={selectedTodo.id} className="col-md-6 mb-4">
			<Card className="d-flex bg-light-subtle p-2">
				{!window.location.href.includes(selectedTodo.id) ? (
					<Link
						to={
							window.location.href.includes('todosList')
								? `${selectedTodo.id}`
								: `todosList/${selectedTodo.id}`
						}
					>
						<Card.Title>{taskTitle}</Card.Title>
						<Card.Body>{taskBody}</Card.Body>

						<div className="form-check-label" onClick={handleStopPropagation}>
							<hr/>
							<Form.Check type="checkbox" onChange={handleChange}>
								<Form.Check.Input
									type="checkbox"
									className="form-check-input"
									checked={checked}
									onChange={handleChange}
								/>
								<Form.Check.Label>
									{checked ? 'Completed' : 'Uncompleted'}
								</Form.Check.Label>
							</Form.Check>
							<hr/>
						</div>
						<Button
							variant="danger"
							className="me-2"
							onClick={handleDelete.bind(null,id)}
						>
                            Delete task
						</Button>
					</Link>
				) : (
					<div className="d-flex-c bg-light p-2 w-25">
						<Card.Title>{taskTitle}</Card.Title>
						<Card.Body>{taskBody}</Card.Body>
						<div className="form-check-label" onClick={handleStopPropagation}>
							<hr/>
							<Form.Check type="checkbox" onChange={handleChange}>
								<Form.Check.Input
									type="checkbox"
									className="form-check-input"
									checked={checked}
									onChange={handleChange}
								/>
								<Form.Check.Label>
									{checked ? 'Completed' : 'Uncompleted'}
								</Form.Check.Label>
							</Form.Check>
							<hr/>
						</div>
						<Button
							variant="danger"
							className="me-2"
							onClick={handleDelete.bind(null,id)}
						>
                            Delete task
						</Button>
					</div>
				)}
			</Card>
		</div>
	);
};

export default Item;

Item.propTypes = {
	selectedTodo : PropTypes.shape({
		taskTitle: PropTypes.string,
		taskBody : PropTypes.string,
		id: PropTypes.string,
		isCompleted: PropTypes.bool,
	}),
};
