import React from "react";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import ErrorBoundary from "../error-boundary/error-boundary";


export default class Page extends React.Component {

    state = {
        selectItem: 1,
        data: null

    };

    componentDidMount() {
        this.setState({data: this.props.getListData})
        // console.log(this.props.getData)
    }

    onPeopleSelected = (id) => {
        this.setState({selectItem:id})
    }

    render() {
        return (
            <ErrorBoundary>
                <div className="row mb-4">
                    <div className="col-sm-12 col-md-6">
                        <ItemList
                            getListData ={ this.props.getListData}
                            onItemSelected ={this.onPeopleSelected}/>

                    </div>
                    <div className="col-sm-12 col-md-6">
                        <PersonDetails personId={this.state.selectItem}/>
                    </div>
                </div>
            </ErrorBoundary>
        )

    }
}