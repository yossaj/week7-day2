const PubSub = require('../helpers/pub_sub.js');

const ClickView = function(element){
  this.element = element;
}

ClickView.prototype.bindEvents = function () {
  const link = document.querySelector('.planets-menu');

  link.addEventListener('click', (event) => {
    //console.log(event);
    event.preventDefault();
    const selectedPlanet = event.target.id;
    PubSub.publish('ClickView:selected-planet', selectedPlanet);
  })
};

module.exports = ClickView;
