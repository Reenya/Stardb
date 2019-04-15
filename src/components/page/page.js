import React from "react";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import ErrorBoundary from "../error-boundary/error-boundary";


export default class Page extends React.Component {
    constructor() {
        super();

    }

    state = {
        selectItem: 1,
        hasError: false,
        type: null
    };

    componentDidMount() {
        this.setState({
            type: this.props.type
        })
    }

    onPeopleSelected() {

    }

    render() {
        // if (this.state.hasError) return <ErrorIndicator/>

        return (
            <ErrorBoundary>
                <div className="row mb-4">
                    <div className="col-sm-12 col-md-6">
                        <ItemList onClick={this.onPeopleSelected()} type="people"/>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <PersonDetails personId={this.state.selectItem}/>
                    </div>
                </div>
            </ErrorBoundary>
        )

    }
}