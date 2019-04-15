import React from 'react';
import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ThrowExeption from '../throw-exeption';

export default class PersonDetails extends React.Component {
    swapiService = new SwapiService();
    state = {
        personId: null,
        person: null,
        loading: true,
        hasError: false
    };

    constructor({personId}) {
        super();
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }

    }

    // componentDidCatch() {
    //     console.log('dssds');
    //     this.setState({
    //         hasError:true
    //     })
    // }

    updatePerson = () => {
        const {personId} = this.props;
        if (!personId) {
            return
        }
        this.setState({
                loading: true
            }
        );
        this.swapiService
            .getPerson(personId)
            .then(this.onPersonLoad);
    }

    onPersonLoad = (person) => {
        this.setState({
            person,
            loading: false
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        
        const {person, personId, loading} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const personDetails = person && !loading? <PersonDitailsdDisplay person={person}/> : null;

        return (
            <div className="person-details jumbotron  ">
                {spinner}
                {personDetails}
            </div>
        )


    }

};

const PersonDitailsdDisplay = ({person}) => {
    const {id, name, gender, birthYear, eyeColor} = person;
    return (

        <div className="row ">
            <div className="image-planet ">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     className="rounded "/>
            </div>

            <div className="col">
                <div><h4>{name}</h4></div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Gender: {gender}</li>
                    <li className="list-group-item">Birth year: {birthYear}</li>
                    <li className="list-group-item">Eye color{eyeColor}</li>
                </ul>
                <ThrowExeption/>
            </div>
        </div>
    )
};
