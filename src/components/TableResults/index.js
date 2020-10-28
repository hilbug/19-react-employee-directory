import React from 'react';

function TableResults(props) {

    let rows = props.results.map(emp => (
        <tr key={emp.login.username}>
            <td>{emp.login.username}</td>
            <td>{emp.name.first}</td>
            <td>{emp.name.last}</td>
            <td>{emp.email}</td>
            <td>{emp.cell}</td>
        </tr>
    ));

    return (
        <div className="row">
			<table className="table table-striped">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Username</th>
                        <th scope="col">First Name</th>
						<th scope="col">Last Name</th>
						<th scope="col">E-mail</th>
                        <th scope="col">Cell Phone</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
    )
}

export default TableResults;