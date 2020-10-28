import React, { Component } from "react";
import API from "../../utils/API";
import TableResults from "../TableResults";
import SearchBox from "../SearchBox";

class TableContainer extends Component {
    state = {
        results: [],
        currentSort: 'asc'
    };
    
    // function to sort the results and setState with new results
    onSortChange = () => {
		const sortArray = [ ...this.state.results ];
		if (this.state.sortDirection === 'asc') {
			sortArray.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
			this.setState({ 
                results: sortArray,
                sortDirection: 'desc'
            });
		} else {
			sortArray.sort((a, b) => (a.name.last < b.name.last ? 1 : -1));
			this.setState({ 
                results: sortArray,
                sortDirection: 'asc'
            });
		}
	};

    // get employee data
    componentDidMount() {
        API.getRandomEmployees()
        .then(res => this.setState({ results: res.data.results }))
        .catch(err => console.log(err));
    }

    // render the table results component with the current state
    render() {
        return (
            <div>
                <SearchBox />
                <TableResults results={this.state.results} onSortChange={this.onSortChange}/>
            </div>
        );
    }
}

export default TableContainer;

// Notes
// sort array of objects: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/