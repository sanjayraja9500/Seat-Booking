'use strict';

//elemnts
const movieEl = document.getElementById('movie');

const seatsEl = document.querySelectorAll('.row .seat:not(.reserved)');

const seatsCountEl = document.getElementById('seats-count');
const totalPriceEl = document.getElementById('total-price');

//global variables
let seatCount = 0;
let moviePrice = movieEl.value;

// console.log(moviePrice);

//functions
const init = function () {
  seatsCountEl.innerText = seatCount;
  totalPriceEl.innerText = seatCount * moviePrice;
};

//event listeners

movieEl.addEventListener('change', () => {
  moviePrice = movieEl.value;

  init();
});

for (let i = 0; i < seatsEl.length; i++) {
  seatsEl[i].addEventListener('click', () => {
    if (seatsEl[i].classList.contains('selected')) {
      seatsEl[i].classList.remove('selected');
    } else {
      seatsEl[i].classList.add('selected');
    }

    let selectedSeats = document.querySelectorAll('.row .seat.selected');
    seatCount = selectedSeats.length;
    init();
  });
}

//initial setting
init();

//sudocode
