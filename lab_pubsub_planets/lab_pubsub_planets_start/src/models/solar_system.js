const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){



  PubSub.subscribe('ClickView:selected-planet', (event) => {
    //console.log(event.detail);
    const selectedPlanetID = event.detail;
    console.log(selectedPlanetID);
    this.publishPlanetDetail(selectedPlanetID)
  });
};

SolarSystem.prototype.publishPlanetDetail = function(selectedPlanetID){
  let foundPlanet = {}
  for (let planet of this.planets){
    if (planet.name === selectedPlanetID){
      foundPlanet = planet
    }
  }
  console.log(foundPlanet)
  PubSub.publish('PlanetView:planet-info', foundPlanet);
  //const selectedPlanet = this.planets.selectedPlanet
}

module.exports = SolarSystem;
