import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import SearchBox from "../components/SearchBox";
// import TableResults from "../components/TableResults";
import TableContainer from "../components/TableContainer";

function Directory() {
    return (
        <div>
            <Header />
            <Container>
                <SearchBox />
                <TableContainer />
            </Container>
        </div>
    )
}

export default Directory;