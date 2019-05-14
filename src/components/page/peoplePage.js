import Page from "./page";

import SwapiService from "../../services/swapi-service";
import React from "react";

class PeoplePage extends React.Component{
    swapiService = new SwapiService();
    render() {
        return(
            <Page getListData ={this.swapiService.getAllPeople}
                  renderItemList={({name,gender}) => `${name} (gender: ${gender})`}
                  renderDetails
                  />
        )
    }

};

export default PeoplePage;