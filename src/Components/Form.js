import React, { useState } from "react";

function Form({ onAdd }) {
    // states
    const [driverName, setDriverName] 	= useState("");
    const [regNumber, setRegNumber]     = useState("");

    // when user submits the form
    function handleSubmit(e) {
        // stop page from refreshing the page
        e.preventDefault();

				// check whether input fields are filled or not
        if (driverName === "" || regNumber === "") {
            alert("Please enter all details!");
            return;
        }

        // get the current time
        const checkInTime = new Date().toLocaleTimeString();

        // pass the vehicle info to the parent to update vehicle list
        onAdd({ driverName, regNumber, checkInTime });

        // make the states to its initial states
        setDriverName("");
        setRegNumber("");
    }

    return (
        <div className="row">
            <form onSubmit={handleSubmit} className="form-component">
                <h2 className="form-component-header">Enter Vehicle Info</h2>
                <div className="form-component-group">
                    <label htmlFor="driverName">Driver Name</label>
                    <input
                        type="text"
                        id="driverName"
                        value={driverName}
                        onChange={(e) => setDriverName(e.target.value)}
                        placeholder="e.g. Kashyap Kumar"
                    />
                </div>

                <div className="form-component-group">
                    <label htmlFor="regNumber">Reg. Number</label>
                    <input
                        type="text"
                        id="regNumber"
                        value={regNumber}
                        onChange={(e) => setRegNumber(e.target.value)}
                        placeholder="e.g. AS01K0110"
                    />
                </div>

                <button type="submit">
                    Add Vehicle
                </button>
            </form>
        </div>
    );
}

export default Form;
