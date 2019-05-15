import React from "react";
import Page from "./page";
import SwapiService from "../../services/swapi-service";
import {Record} from "../item-details/item-details";


const PeoplePage = () => {
    const swapiService = new SwapiService();
    return (
            <Page getListData={swapiService.getAllPeople}
                  renderItemList={({name, gender}) => `${name} (gender: ${gender})`}
                  getItemDetails={swapiService.getPerson}
                  nameImgSection='characters'>

                <Record field='gender' label='Gender'/>
                <Record field='birthYear' label='Birth Year'/>
                <Record field='eyeColor' label='Eye color'/>

            </Page>
        )
};

const StarshipsPage = () => {
    const swapiService = new SwapiService();
    return (
        <Page getListData={swapiService.getAllStarships}
              renderItemList={({name, model}) => `${name} (model: ${model})`}
              getItemDetails={swapiService.getStarship}
              nameImgSection='starships'>

            <Record field='model' label='Model'/>
            <Record field='consumables' label='Consumables'/>
            <Record field='length' label='Length'/>
            <Record field='costInCredit' label='Cost in credits'/>

        </Page>
    )
};

const PlanetsPage = () => {
    const swapiService = new SwapiService();
    return (
        <Page getListData={swapiService.getAllPlanets}
              renderItemList={({name, diameter}) => `${name} (diameter: ${diameter})`}
              getItemDetails={swapiService.getPlanet}
              nameImgSection='planets'>

            <Record field='diameter' label='Diameter'/>
            <Record field='population' label='Population'/>
            <Record field='rotationPeriod' label='Rotation period'/>

        </Page>
    )
};

export  {PeoplePage,StarshipsPage,PlanetsPage};