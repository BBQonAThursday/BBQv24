const axios = require('axios');
const iah = (ip, placement, html) => {
    ip.insertAdjacentHTML(placement, html);
  }

const $ = (selector) => {
  return document.querySelector(selector);
}


module.exports = async () => {
  const deckId = 11124622;
  const url = `https://archidekt.com/api/decks/${deckId}/`
  // https://scryfall.com/docs/api/cards/id
  // https://bryanlrobinson.com/blog/using-eleventys-javascript-data-files/
  const cardData = [];
  return axios.get(url)
    .then(function (response) {
        // console.log(response.data.cards);
        const cards = response.data.cards;
        let ids = [], scryfall = [];
        cards.forEach(c => {
          // console.log(c.card);
          ids.push(c.card.uid);
        });
        ids.forEach((e, i) => {
            setTimeout(() => {
              fetch(`https://api.scryfall.com/cards/${e}`)
                .then(response => response.json())
                .then(data => {
                  // console.log(data.name);
                  cards.push(data.name);
                });
            }, 500);
        });
    })
    .catch(function(error) {
        console.log(error);
    });
  
    cardData.forEach(c => {
      iah($('.deckData'), 'beforeend', `<div class="card">${c}</div>`);
    })
};