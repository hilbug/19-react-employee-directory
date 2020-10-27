import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from "../../utils/API";

class TableResults extends Component {
    state = {
        rows: [],
        //results: [],
        search: ""
      };

    componentDidMount() {
    API.getRandomEmployees()
        .then(res => this.setState({ rows: res.data.results }))
        .catch(err => console.log(err));
    }
    
    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>Cell Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((row) => (
                            <TableRow key={row.login.username}>
                                <TableCell component="th" scope="row">{row.login.username}</TableCell>
                                <TableCell>{row.name.first}</TableCell>
                                <TableCell>{row.name.last}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.cell}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default TableResults;
