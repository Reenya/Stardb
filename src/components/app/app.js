import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../page/all-pages";
import {BrowserRouter as Router, Route} from "react-router-dom";

import './app.css';


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
            <Router>
                <div className="App container">
                    <Header/>
                    <RandomPlanet/>

                    <Route path="/StarDB" component={PeoplePage} exact/>
                    <Route path="/people" component={PeoplePage}/>
                    <Route path="/planets" component={PlanetsPage}/>
                    <Route path="/starships" component={StarshipsPage}/>

                </div>
            </Router>
        );
    }
}