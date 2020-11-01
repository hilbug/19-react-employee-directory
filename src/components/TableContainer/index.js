import React, { Component } from "react";
import API from "../../utils/API";
import TableResults from "../TableResults";
import SearchBox from "../SearchBox";

class TableContainer extends Component {
    //https://reactjs.org/docs/handling-events.html
    constructor(props) {
        super(props)
        this.state = {
            results: [], // original copy - don't change
            currentSort: 'asc',
            search: ""
        };
    }

    // get employee data from the API
    componentDidMount() {
        API.getRandomEmployees()
            .then(res => this.setState(
                { 
                    results: res.data.results 
                }
            ))
            .catch(err => console.log(err));
    }

    // get the search value and add to state
    handleInputChange = event => {
        event.preventDefault();
        
        this.setState(
            { 
                ...this.state,
                search: event.target.value.toLowerCase()
            }
        );
    };

    // function to sort the results and setState with new results
    onSortChange = () => {
        let sortArray = [...this.state.results];
        if (this.state.currentSort === 'asc') {
            sortArray.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
            this.setState({
                ...this.state,
                results: sortArray,
                currentSort: 'desc'
            });
        } else {
            sortArray.sort((a, b) => (a.name.last < b.name.last ? 1 : -1));
            this.setState({
                ...this.state,
                results: sortArray,
                currentSort: 'asc'
            });
        }
    };

    // render the table results component with the current state
    render() {
        return (
            <div>
                <SearchBox  
                    handleInputChange={this.handleInputChange} 
                />
                <TableResults 
                    results={this.state.results} 
                    onSortChange={this.onSortChange} 
                    search={this.state.search}
                />
            </div>
        );
    }
}

export default TableContainer;

// Notes
// Sort array of objects: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/