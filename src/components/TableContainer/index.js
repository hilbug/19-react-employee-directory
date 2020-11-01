import React, { Component } from "react";
import API from "../../utils/API";
import TableResults from "../TableResults";
import SearchBox from "../SearchBox";

class TableContainer extends Component {
    //https://reactjs.org/docs/handling-events.html
    constructor(props) {
        super(props)
        this.state = {
            results: [], // original copy - don't change,
            sorted: [],
            filtered: [],
            currentSort: 'asc',
            search: ""
        };
        //this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // function to sort the results and setState with new results
    onSortChange = () => {
        let sortArray = [...this.state.results];
        if (this.state.currentSort === 'asc') {
            sortArray.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
            this.setState({
                ...this.state,
                sorted: sortArray,
                currentSort: 'desc'
            });
        } else {
            sortArray.sort((a, b) => (a.name.last < b.name.last ? 1 : -1));
            this.setState({
                ...this.state,
                sorted: sortArray,
                currentSort: 'asc'
            });
        }
    };

    // get employee data
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
        let filteredArray = [...this.state.results];
        let filteredResults = filteredArray.filter(emp => emp.name.last.toLowerCase().includes(event.target.value.toLowerCase()));
        
        this.setState(
            { 
                ...this.state,
                search: event.target.value.toLowerCase(),
                filtered: filteredResults
            }
        );
    };

    // handleFormSubmit
    // event.preventDefault();
    // is this using the search value to set results as a filtered array based on the search term?
    // new array just to use for filtering.
    // another state property basetable - table dependent on filtered data
    // sort and filter would use the basetable data and update the filtered table data.
    // filteredArray = results
    /*
    handleFormSubmit(event) {
        event.preventDefault();
        let filteredArray = [...this.state.results];
        // if i want elem.firstName to filter on more than one i could do "OR". this also probably needs to be a "like" what is typed comparison...
        // maybe just need this in handleInputChange
        let filteredResults = filteredArray.filter(emp => emp.name.last.toLowerCase().includes(this.state.search.toLowerCase()));

        this.setState(
            {
            ...this.state,
            filtered: filteredResults
            }
        );
    }
    */
    // render the table results component with the current state
    render() {
        return (
            <div>
                <SearchBox 
                    //search={this.state.search}
                    //handleFormSubmit={this.handleFormSubmit} 
                    handleInputChange={this.handleInputChange} 
                />
                {/* this.state.results probably needs to change to filtered */}
                <TableResults 
                    // results={this.state.search.length > 0 ? this.state.filtered : this.state.sorted} 
                    results={this.state.search.length > 0 ? this.state.filtered : (this.state.sorted.length > 0 ? this.state.sorted : this.state.results)} 
                    onSortChange={this.onSortChange} 
                />
            </div>
        );
    }
}

export default TableContainer;

// Notes
// sort array of objects: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/