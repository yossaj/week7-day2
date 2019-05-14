const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const ClickView = require('./views/click_view.js');
const PlanetView = require('./views/planet_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  console.log(planetsDataModel.planets);

  const clickView = new ClickView();
  clickView.bindEvents();

  const infoDiv = document.querySelector('.planet-details')
  const planetView = new PlanetView(infoDiv);
  planetView.bindEvents();

  // const infoDiv = document.querySelector('div#animal-info')
  // const animalInfoDisplay = new AnimalInfoView(infoDiv);
  // animalInfoDisplay.bindEvents();
  //
  // const animalsDataSource = new Animals();
  // animalsDataSource.bindEvents();

});
