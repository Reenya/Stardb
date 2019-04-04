import React from 'react';
import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends React.Component {
    swapiService = new SwapiService();
    state = {
        personId: 1,
        person: null
    };

    constructor({personId}) {
        super();
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId!== prevProps.personId) {
            this.updatePerson();
        }

    }

    updatePerson = () =>{
        const {personId} = this.props;
        if (!personId) {
            return
        }
        console.log('iddddd',personId);
        this.swapiService
            .getPerson(personId)
            .then(this.onPersonLoad);
    }

    onPersonLoad =(person)=>{
        this.setState({
            person
        })
    }

    render() {

        const {person,personId} = this.state;

        if (!person) {
            return (<Spinner />)
        }

        const {id,name,gender,birthYear,eyeColor} = this.state.person;
        return (
            <div className="person-details jumbotron  ">
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

                    </div>
                </div>

            </div>
        )
    }

};
