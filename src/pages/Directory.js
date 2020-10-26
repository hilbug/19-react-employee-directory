import React from "react";
import Header from "../components/Header/index";
import Container from "../components/Container/index";
import SearchBox from "../components/SearchBox/index";

function Directory() {
    return (
        <div>
            <Header />
            <Container>
                <SearchBox />
            </Container>
        </div>
    )
}

export default Directory;