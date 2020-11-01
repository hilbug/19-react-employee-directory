import React from "react";
import "./style.css";

function SearchBox(props) {
    return (
        <div>
            <h2 className="text-center">Search for employees!</h2>
            {/* Remove form to get rid of "enter" being usable */}
            {/* <form className="search form-inline d-flex align-items-center">
                <div className="form-group mx-auto"> */}
                <div className="input-group pb-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Employee Last Name</span>
                    </div>
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}  // maybe only need this and not handleformsubmit
                        name="search"
                        type="search"
                        className="form-control mx-2"
                        placeholder="Last name..."
                        id="empsearch"
                    />
                </div>
                {/* </div>
            </form> */}
        </div>
    );
}

export default SearchBox;

// Week 19 Activity 23-Pupster - SearchForm