import React from 'react';

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ThrowExeption from '../throw-exeption';

import './item-details.css';

export default class ItemDetails extends React.Component {
    state = {
        itemId: null,
        item: null,
        loading: true,
        hasError: false
    };

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }

    }

    updateItem = () => {
        const {itemId, getItemDetails} = this.props;
        if (!itemId) {
            return
        }
        this.setState({
                loading: true
            }
        );
        getItemDetails(itemId)
            .then(this.onItemLoad);
    }

    onItemLoad = (item) => {
        this.setState({
            item,
            loading: false
        })
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const {item, loading} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const itemDetails = item && !loading ? (
                <ItemDetailsDisplay
                    item={item}
                    renderDetails={this.props.renderDetails}
                    nameImgSection={this.props.nameImgSection}>
                    {this.props.children}
                </ItemDetailsDisplay>
            )
            : null;

        return (
            <div className="item-details jumbotron  ">
                {spinner}
                {itemDetails}
            </div>
        )
    }
};

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span>{label}: </span>
            <span>{item[field]}</span></li>
    )
};

export {Record};

const ItemDetailsDisplay = ({item, children,nameImgSection}) => {
    return (
        <div className="row ">
            <div className="image-planet ">
                <img src={`https://starwars-visualguide.com/assets/img/${nameImgSection}/${item.id}.jpg`}
                     className="rounded "
                     alt=""/>
            </div>

            <div className="col">
                <div><h4>{item.name}</h4></div>

                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, {item});
                        })
                    }
                </ul>
                <ThrowExeption/>
            </div>
        </div>
    )
};
