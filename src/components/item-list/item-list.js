import React from 'react';
import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner"

export default class ItemList extends React.Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    };

    renderPeopleList = (arr) => {
        return arr.map( ({id,name}) => {
            return <li className="list-group-item list-group-item-action"
                       onClick={() => this.props.onItemSelected(id)}
                       key={id}>
                {name}
            </li>
        } )
    }

    render() {

        const {peopleList} = this.state;
        if (!peopleList) {
            return <Spinner/>
        }
        const items = this.renderPeopleList(peopleList);
        return (<ul className="item-list list-group">
            {items}
        </ul>)
    }

};
