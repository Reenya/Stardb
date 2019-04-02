export  default class SwapiService {

    _apiBase = 'https://swapi.co/api';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            // throw new Error (`Could not fetch ${url}
            // received ${res.status}`);
            throw new Error('Что за хуйня');
        }
        return await res.json();
    }

    async getAllPeople() {
        const {results} = await this.getResource(`/people/`);
        return results.map(this._transformPerson);
    };
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return  this._transformPerson(person)
    };


    async getAllPlanets() {
        const {results} = await this.getResource(`/planets/`);
        return results.map(this._transformPlanet);
    };
    async getPlanet(id) {
        //const planet = await this.getResource(`/planets/${id}`).then((p) => this._transformPlanet(p));
        const planet = await this.getResource(`/planets/${id}`);
        // const res = await planet.then( (item) => item);
        console.log('это внутри сервиса',planet );
        return this._transformPlanet(planet);
    };
    async getAllStarships() {
        const {results} = await this.getResource(`/starships/`);
        return results.map(this._transformStarship);
    };
    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    };

    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
        return id;
    }

    _transformPlanet (planet) {

        return {
             id: this._extractId(planet),
            planetName: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson (person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

    _transformStarship (starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredit: starship.costInCredit,
            length: starship.length,
            crew: starship.crew,
            passagers: starship.passagers,
            cargoCapacity: starship.cargoCapacity


        }
    }



};

