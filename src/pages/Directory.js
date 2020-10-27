import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import SearchBox from "../components/SearchBox";
import TableResults from "../components/TableResults";

function Directory() {
    return (
        <div>
            <Header />
            <Container>
                <SearchBox />
                <TableResults />
            </Container>
        </div>
    )
}

export default Directory;