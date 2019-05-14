import React from "react";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details";
import ErrorBoundary from "../error-boundary";
import Row from "../../row";

export default class Page extends React.Component {

    state = {
        selectItem: 1,
        data: null

    };

    componentDidMount() {
        // console.log(this.props.getData)
    }

    onPeopleSelected = (id) => {
        this.setState({selectItem: id})
    }


    render() {
        const itemList = (
            <ItemList
                getListData={this.props.getListData}
                onItemSelected={this.onPeopleSelected}
                renderItemList={this.props.renderItemList}/>
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectItem}/>
        );

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>

            </ErrorBoundary>




        )

    }
}