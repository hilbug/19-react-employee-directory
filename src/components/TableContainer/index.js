import React, { Component } from "react";
import API from "../../utils/API";
import TableResults from "../TableResults";

class TableContainer extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        API.getRandomEmployees()
        .then(res => this.setState({ results: res.data.results }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <TableResults results={this.state.results} />
            </div>
        );
    }
}

export default TableContainer;