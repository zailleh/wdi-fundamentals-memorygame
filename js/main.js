console.log("Up and running!");


var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	}
];

var cardsInPlay = [];

var flipCard = function (cardID)
	{
		console.log("User flipped " + cards[cardID].rank);
		console.log(cards[cardID].cardImage);
		console.log(cards[cardID].rank);

		cardsInPlay.push(cards[cardID].rank);

		checkForMatch();
	}

var checkForMatch = function()
	{

		if (cardsInPlay.length === 2)
		{
			if (cardsInPlay[0] === cardsInPlay[1])
			{
				alert("You found a match!");
			}
			else
			{
				alert("Sorry, try again");
			}
		}
	}

flipCard(0);
flipCard(2);