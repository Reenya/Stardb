import React from "react";
import ItemList from "../item-list";
import ErrorBoundary from "../error-boundary";
import Row from "../../row";
import ItemDetails from "../item-details";

export default class Page extends React.Component {

    state = {
        selectItem: 10,
        data: null

    };

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

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectItem}
                getItemDetails={this.props.getItemDetails}
                nameImgSection={this.props.nameImgSection}>

                {this.props.children}
            </ItemDetails>
        );

        return (
            <ErrorBoundary>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundary>
        )

    }
}