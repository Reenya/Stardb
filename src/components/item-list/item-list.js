import React from 'react';
import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

export default class ItemList extends React.Component {
    swapiService = new SwapiService();

    state = {
        list: null,
        loading: true,
        type: null,
        hasError: true
    };

    componentDidMount() {
        this.setState({
            type: this.props.type
        });
        const getValuesList = (list) => {
            this.setState({
                list,
                loading: false,
                hasError: false
            })
        };
        console.log(this.props.type);
        switch (this.props.type) {
            case "people" :
                this.swapiService
                    .getAllPeople()
                    .then(getValuesList)
                    .catch(this.catchError);
                break;
            case "planets" :
                this.swapiService
                    .getAllPlanets()
                    .then(getValuesList)
                    .catch(this.catchError);
                break;
            case "ships" :
                this.swapiService
                    .getAllStarships()
                    .then(getValuesList)
                    .catch(this.catchError);
                break;
        }
    };

    catchError = () => {
        this.setState({
            hasError: true,
            loading: false
        })
        console.log('я почему-то считаю что ттут есть ошибка')
    }

    renderList = (arr) => {
        return arr.map(({id, name}) => {
            return <li className="list-group-item list-group-item-action"
                       onClick={() => this.props.onItemSelected(id)}
                       key={id}>
                {name}
            </li>
        })
    }

    render() {

        const {list, loading, hasError} = this.state;

        const error = hasError ? <div className="random-planet jumbotron"><ErrorIndicator/></div> : null;
        const spinner = loading ? <div className="random-planet jumbotron"><Spinner/></div> : null;
        const items = list && !hasError ? this.renderList(list) : null;

        return (<ul className="item-list list-group">
            {spinner}
            {items}
            {error}
        </ul>)
    }
};
