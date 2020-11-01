import React from "react";
import "./style.css";

function SearchBox(props) {
    return (
        <div>
            <h2 className="text-center">Search for employees!</h2>
            <form onSubmit={props.handleFormSubmit} className="search form-inline d-flex align-items-center">
                <div className="form-group mx-auto">
                    <label htmlFor="empsearch">Employee Last Name:</label>
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}  // maybe only need this and not handleformsubmit
                        name="search"
                        type="text"
                        className="form-control mx-2"
                        placeholder="Start typing a last name..."
                        id="empsearch"
                    />
                    <button type="submit" className="btn btn-success">
                        {/* on submit allows us to use the enter key */}
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchBox;

// Week 19 Activity 23-Pupster - SearchForm