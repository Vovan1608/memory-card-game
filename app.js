document.addEventListener('DOMContentLoaded', () => {
	//card options
  const cardArray = [
		{
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ];

	cardArray.sort(() => 0.5 - Math.random());
	
	const grid = document.querySelector('.grid');
	const result = document.getElementById('result');
	let cardsChoosen = [];
	let cardsChoosenId = [];
	let cardsWon = [];

	// create a board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i += 1) {
			let card = document.createElement('img');
			card.setAttribute('src', 'images/blank.png');
			card.setAttribute('alt', 'blankpicture');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipcard);
			grid.append(card);
		}
	}

	// check for matches
	function checkForMatch() {
		let cards = document.querySelectorAll('img');
		const [optionOneId, optionTwoId] = cardsChoosenId;

		if (cardsChoosen[0] === cardsChoosen[1]) {
			alert('You found a match!');
			cards[optionOneId].setAttribute('src', 'images/white.png');
			cards[optionTwoId].setAttribute('src', 'images/white.png');
			cardsWon.push(cardsChoosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/blank.png');
			cards[optionTwoId].setAttribute('src', 'images/blank.png');
			alert('Sorry, try again!');
		}

		cardsChoosen = [];
		cardsChoosenId = [];
		result.textContent = cardsWon.length;

		if (cardsWon.length === cardArray.length / 2) {
			result.textContent = 'Congratulations! You found them all!';
		}
	}

	// flip cards
	function flipcard() {
		let cardId = this.getAttribute('data-id');
		cardsChoosen.push(cardArray[cardId].name);
		cardsChoosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);

		if (cardsChoosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});