import React from "react";
import "./style.css";

function SearchBox(props) {
    return (
        <div>
            <h2 className="text-center">Search for employees!</h2>
            {/* Remove form to get rid of "enter" being usable */}
            <form className="search form-inline d-flex align-items-center">
                <div className="form-group mx-auto">
                    <label htmlFor="empsearch">Employee Last Name:</label>
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
            </form>
        </div>
    );
}

export default SearchBox;

// Week 19 Activity 23-Pupster - SearchForm