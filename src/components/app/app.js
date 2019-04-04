import React from "react";
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";
import ItemList from "../item-list";


export default class App extends React.Component{
    state = {
        showRandomPlanet: true,
        selectedPerson:null
    }

    onPersonSelected =(id) =>{
        console.log('id',id)
        this.setState({
            selectedPerson:id
        })
    }

    render() {
        console.log("this.state.selectedPerson",this.state.selectedPerson);
        return (<div className="App container">
            <Header/>
            <RandomPlanet/>

                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <ItemList onItemSelected = {this.onPersonSelected}/>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <PersonDetails personId = {this.state.selectedPerson}/>
                    </div>

                </div>



        </div>);
    }
}