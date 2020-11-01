import React from "react";
import "./style.css";

function SearchBox(props) {
    return (
        <div>
            <h2 className="text-center">Search for employees!</h2>
                <div className="input-group pb-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Employee Last Name</span>
                    </div>
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}  // only need this and not handleformsubmit
                        name="search"
                        type="search"
                        className="form-control mx-2"
                        placeholder="Last name..."
                        id="empsearch"
                    />
                </div>
        </div>
    );
}

export default SearchBox;

// Notes
// Week 19 Activity 23-Pupster - SearchForm