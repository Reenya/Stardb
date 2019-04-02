import React from "react";
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";
import ItemList from "../item-list";


export default class App extends React.Component{
    render() {
        return (<div className="App container">
            <Header/>
            <RandomPlanet/>

                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <PersonDetails />
                    </div>

                </div>



        </div>);
    }
}