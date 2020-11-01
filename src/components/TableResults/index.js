import React from 'react';

function TableResults(props) {
    
    // filter down the results if there is a search word entered
    let employees = props.results.filter(emp => emp.name.last.toLowerCase().includes(props.search));

    // map the employee results to table rows
    let rows = employees.map(emp => (
        <tr key={emp.id.value}>
            <td>{emp.id.value}</td>
            <td>{emp.login.username}</td>
            <td>{emp.name.first}</td>
            <td>{emp.name.last}</td>
            <td>{emp.email}</td>
            <td>{emp.cell}</td>
        </tr>
    ));

    // create headers and pass in rows
    return (
        <div className="row">
            <div className="table-responsive">
                <table className="table table-striped">
                    <caption>List of employees</caption>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Employee ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name
                            <button className="btn text-white" onClick={props.onSortChange}>
                                    <i className={`fas fa-sort`}></i>
                                </button></th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Cell Phone</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        </div>
    )
}

export default TableResults;

// Notes
// Week 19 Activity 23-Pupster - SearchResults
// Bootstrap Tables https://getbootstrap.com/docs/4.5/content/tables/
// Sort table with react https://www.florin-pop.com/blog/2019/07/sort-table-data-with-react/