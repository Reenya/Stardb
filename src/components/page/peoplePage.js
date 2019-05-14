import React from "react";
import Page from "./page";
import SwapiService from "../../services/swapi-service";
import {Record} from "../item-details/item-details";


class PeoplePage extends React.Component{
    swapiService = new SwapiService();
    render() {
        return(
            <Page getListData ={this.swapiService.getAllPeople}
                  renderItemList={({name,gender}) => `${name} (gender: ${gender})`}
                  getItemDetails={this.swapiService.getPerson}>
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye color'/>
            </Page>
        )
    }
};

export default PeoplePage;