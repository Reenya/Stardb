import React from "react";
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../page/peoplePage";


export default class App extends React.Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: 1
    }

    onPersonSelected = (id) => {
        console.log('id', id)
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        return (
            <div className="App container">
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>
                <PlanetsPage/>
                <StarshipsPage/>
            </div>
        );
    }
}