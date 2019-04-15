import React from "react";
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";
import ItemList from "../item-list";
import Page from "../page/page";
import ErrorIndicator from "../error-indicator/error-indicator";
import ErrorBoundary from "../error-boundary/error-boundary";
import PeoplePage from "../page/peoplePage";


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

                {/*<div className="row mb-4">*/}
                {/*<div className="col-sm-12 col-md-6">*/}
                {/*<ItemList onItemSelected = {this.onPersonSelected} type="planets"/>*/}
                {/*</div>*/}
                {/*<div className="col-sm-12 col-md-6">*/}
                {/*<PersonDetails personId = {this.state.selectedPerson}/>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="row mb-4">*/}
                {/*<div className="col-sm-12 col-md-6">*/}
                {/*<ItemList onItemSelected = {this.onPersonSelected} type="ships"/>*/}
                {/*</div>*/}
                {/*<div className="col-sm-12 col-md-6">*/}
                {/*<PersonDetails personId = {this.state.selectedPerson}/>*/}
                {/*</div>*/}
                {/*</div>*/}


            </div>
        );
    }
}