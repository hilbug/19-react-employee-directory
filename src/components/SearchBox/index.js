import React from "react";
import "./style.css";

function SearchBox(props) {
    return (
        <div>
            <h2 className="text-center">Search for employees!</h2>
            <form className="search form-inline d-flex align-items-center">
                <div className="form-group mx-auto">
                    <label htmlFor="empsearch">Employee Name:</label>
                    <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="search"
                        // list="employees"
                        type="text"
                        className="form-control mx-2"
                        placeholder="Start typing a name..."
                        id="empsearch"
                    />
                        {/* <datalist id="breeds">
                            {props.breeds.map(breed => (
                            <option value={breed} key={breed} />
                            ))}
                        </datalist> */}
                    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchBox;