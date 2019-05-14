import React from "react";

const Row = ({left, right}) => {
    return (
        <div className="row mb-4">
            <div className="col-sm-12 col-md-6">
                {left}
            </div>
            <div className="col-sm-12 col-md-6">
                {right}
            </div>
        </div>
    );
};

export default Row;