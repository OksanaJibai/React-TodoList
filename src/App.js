
// eslint-disable-next-line no-unused-vars
import React from 'react';

function App() {
	return(
		<main>
			<h1 className="text-center mt-5 mb-5">TODO LIST</h1>
			<div className="container">
				<div className="row">
					<div className="col-4">
						<form id="todoForm">
							<div className="mb-3">
								<label className="form-label">Task title</label>
								<input type="text" name="title" className="form-control"/>
							</div>
							<div className="mb-3">
								<label className="form-label">Task body</label>
								<textarea
									name="description"
									className="form-control"
									placeholder="Task body"
									cols="30"
									rows="10">
								</textarea>
							</div>
							<input
								type="submit"
								className="btn btn-primary"
								value="Create Task!"
							/>
						</form>
					</div>

					<div className="col-8"><div className="row" id="todoItems"></div></div>

				</div>
			</div>
		</main>
	);
}

export default App;
