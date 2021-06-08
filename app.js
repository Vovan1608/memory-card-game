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

	const grid = document.querySelector('.grid');
	let cardsChoosen = [];
	let cardsChoosenId = [];

	// create a board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i += 1) {
			let card = document.createElement('img');
			card.setAttribute('src', 'images/blank.png');
			card.setAttribute('alt', 'blankpicture');
			card.setAttribute('data-id', i);
			// card.addEventListener('click', flipcard);
			grid.append(card);
		}
	}

	// check for matches
	function checkForMatch() {
		let cards = document.querySelectorAll('img');
		const [optionOneId, optionTwoId] = cardsChoosenId;
		
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