const PubSub = require('../helpers/pub_sub.js');

const PlanetView = function(element){
  this.element = element;

}

PlanetView.prototype.bindEvents = function(){
  PubSub.subscribe('PlanetView:planet-info',(evt) =>{
    console.log(evt.detail)
    const planet = evt.detail;
    this.render(planet);
  })
}

PlanetView.prototype.render = function(planet) {
  const infoParagraph1 = document.createElement('h2');
  infoParagraph1.textContent = `${planet.name}`;
  const infoParagraph2 = document.createElement('h3');
  infoParagraph2.textContent = `Day: ${planet.day}`;
  const infoParagraph3 = document.createElement('h3');
  infoParagraph3.textContent = `Orbit: ${planet.orbit}`;
  const infoParagraph4 = document.createElement('h3');
  infoParagraph4.textContent = `Surface Area: ${planet.surfaceArea}`;
  const infoParagraph5 = document.createElement('h3');
  infoParagraph5.textContent = `Volume: ${planet.volume}`;
  const infoParagraph6 = document.createElement('h3');
  infoParagraph6.textContent = `Gravity: ${planet.gravity}`;
  const infoParagraph7 = document.createElement('h3');
  infoParagraph7.textContent = `Moons: ${planet.moons}`;
  this.element.innerHTML = '';
  this.element.appendChild(infoParagraph1);
  this.element.appendChild(infoParagraph2);
  this.element.appendChild(infoParagraph3);
  this.element.appendChild(infoParagraph4);
  this.element.appendChild(infoParagraph5);
  this.element.appendChild(infoParagraph6);
  this.element.appendChild(infoParagraph7);
}
module.exports = PlanetView
