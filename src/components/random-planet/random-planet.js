import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from "../../services/swapi-service";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ErrorBoundary from "../error-boundary";

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet,10000);
    }
    componentDidUpdate(){
    }
    componentWillUnmount(){
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })

    };
    onError =(err) =>{
        this.setState({
            error: true,
            loading:false
        })
    }
    updatePlanet =() => {
        const id = Math.floor(Math.random() * 10) + 2;

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };


    render() {
        const {
            planet,
            loading,
            error
        } = this.state;
        const hasData = !(loading || error);
        const errorMassage = error? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData && !error?  <PlanetView planet={planet}/> : null;
        return (
            <div className="random-planet jumbotron">
                {spinner}

                {content}
                {errorMassage}

            </div>
        )
    }


};

const PlanetView = ({planet}) => {
    const {
        id, name,
        population,
        rotationPeriod,
        diameter,
    } = planet;

    return (
        <ErrorBoundary>
            <div className="row">
                <div className="image-planet ">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                         alt=""
                         className="rounded "/>
                </div>

                <div className="col">
                    <div><h4>{name}</h4></div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Population: {population}</li>
                        <li className="list-group-item">Rotation Period: {rotationPeriod}</li>
                        <li className="list-group-item">Diameter: {diameter}</li>
                    </ul>

                </div>
            </div>
        </ErrorBoundary>
    )
}



