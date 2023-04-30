import React from "react";
import "./Error.scss";
import Error404 from "../../assets/Error404.jpg";

function Error() {
    return (
        <div className="error">
        <img className="errorImg" src={Error404} alt="error" />
        </div>
    );
    }

export default Error;