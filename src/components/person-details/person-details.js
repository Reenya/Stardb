import React from 'react';
import './person-details.css';

const PersonDetails = () => {
    return (
        <div className="person-details jumbotron  ">
            <div className="row ">
                <div className="image-planet ">
                    <img src="https://picsum.photos/200/300/?random"
                         alt=""
                         className="rounded "/>
                </div>

                <div className = "col">
                    <div><h4>Planet Name</h4></div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>

                </div>
            </div>

        </div>
    )
};

export default PersonDetails;