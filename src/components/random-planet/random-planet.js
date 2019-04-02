import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from "../../services/swapi-service";
import Spinner from '../spinner';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        console.log(this.state.planet, this.state.loading);
        this.setState({
            planet,
            loading: false
        })

    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 10) + 2;

        //
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded);

        //this.setState(this.swapiService.getPlanet(id))  ;

    };


    render() {
        const {
            planet,
            loading
        } = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !loading? <PlanetView planet={planet}/> : null;
        return (
            <div className="random-planet jumbotron">
                {loading}
                {content}

            </div>
        )
    }


};

const PlanetView = ({planet}) => {
    const {
        id, planetName,
        population,
        rotationPeriod,
        diameter,
    } = planet;

    return (
        <React.Fragment>
            <div className="row">
                <div className="image-planet ">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                         alt=""
                         className="rounded "/>
                </div>

                <div className="col">
                    <div><h4>{planetName}</h4></div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Population: {population}</li>
                        <li className="list-group-item">Rotation Period: {rotationPeriod}</li>
                        <li className="list-group-item">Diameter: {diameter}</li>
                    </ul>

                </div>
            </div>
        </React.Fragment>
    )
}



