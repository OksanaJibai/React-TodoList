import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TodoList = () =>{
	return(
		<Container>
			<Row>
				<Col lg={4}>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label >Task title</Form.Label>
							<Form.Control
								type="text"
								name="title"
								placeholder="title"
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label className="form-label">Task body</Form.Label>
							<Form.Control
								as="textarea"
								rows={10}
								cols={30}
								name="description"
								placeholder="Task body"
								required
							/>
						</Form.Group>
						<Button
							type="submit"
							variant="primary"
						>
                            Create Task!
						</Button>
					</Form>
				</Col>

				<Col lg={8}>
					<Row></Row>
				</Col>

			</Row>
		</Container>);
};

export default TodoList;